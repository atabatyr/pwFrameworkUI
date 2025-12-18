pipeline {
  agent any

  tools {
    nodejs 'node24'
  }

  environment {
    NODE_ENV = 'test'
  }

  triggers {
    githubPush() // or pollSCM('* * * * *')
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

    // ✅ Restore trend history
    stage('Restore Allure History') {
      steps {
        script {
          def prevHistory = "${env.WORKSPACE}/allure-report/history"
          def resultsHistory = "${env.WORKSPACE}/allure-results/history"
          if (fileExists(prevHistory)) {
            sh "mkdir -p ${resultsHistory} && cp -R ${prevHistory}/* ${resultsHistory}/"
            echo "✅ Restored Allure history from previous build."
          } else {
            echo "⚠️ No previous Allure history found."
          }
        }
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
      // 📊 Publish Allure report
      allure([
        reportBuildPolicy: 'ALWAYS',
        results: [[path: 'allure-results']]
      ])

      // 🗂️ Archive report history for the next run
      archiveArtifacts artifacts: 'allure-report/history/**', allowEmptyArchive: true
    }
  }
}
