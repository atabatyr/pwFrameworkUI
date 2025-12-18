pipeline {
  agent any

  tools {
    nodejs 'node24'
  }

  environment {
    NODE_ENV = 'test'
  }

  triggers {
    // 🟢 Trigger build on every push to 'main'
    pollSCM('* * * * *') // Polls Git every minute (optional)
    // OR, for GitHub webhook:
    // githubPush()
  }

  stages {
    stage('Clean Reports') {
      steps {
        sh 'rm -rf allure-results allure-report test-results playwright-report'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'node -v'
        sh 'npm ci'
        sh 'npx playwright install chromium'
      }
    }

    stage('Run Playwright Tests') {
      steps {
        sh 'npm run test:chromium'
      }
    }

    stage('Generate Allure Report') {
      steps {
        sh 'npm run allure:generate'
      }
    }
  }

  post {
    always {
      // 🕘 Copy previous Allure history to results (for trend graphs)
      script {
        def reportHistory = "${env.WORKSPACE}/allure-report/history"
        def resultsHistory = "${env.WORKSPACE}/allure-results/history"
        if (fileExists(reportHistory)) {
          sh "mkdir -p ${resultsHistory} && cp -R ${reportHistory}/* ${resultsHistory}/"
        }
      }

      // 📊 Publish Allure report
      allure([
        reportBuildPolicy: 'ALWAYS',
        results: [[path: 'allure-results']]
      ])

      // 🗂️ Archive history folder (optional)
      archiveArtifacts artifacts: 'allure-report/history/**', allowEmptyArchive: true
    }
  }
}
