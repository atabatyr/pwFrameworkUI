pipeline {
  agent any

  triggers {
    cron('40 23 * * *')
  }

  tools {
    nodejs 'node24'
  }

  environment {
    NODE_ENV = 'test'
  }

  stages {
    stage('Clean Previous Reports') {
      steps {
        sh 'rm -rf allure-results allure-report playwright-report test-results'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'node -v'
        sh 'npm -v'
        sh 'npm ci'
        sh 'npx playwright install chromium'
      }
    }

    stage('Run Playwright Tests (Chromium)') {
      steps {
        sh 'npm run test:chromium'
      }
    }

    stage('Generate Allure Report') {
      steps {
        sh 'npm run allure:generate'
      }
    }

    stage('Publish Allure Report') {
      steps {
        publishHTML(target: [
          reportDir: 'allure-report',
          reportFiles: 'index.html',
          reportName: 'Allure Report',
          alwaysLinkToLastBuild: true,
          keepAll: true
        ])
      }
    }
  }

  post {
    always {
      echo '📦 Archiving reports'

      // ✅ JUnit results for Jenkins graphs
      junit 'test-results/**/*.xml'

      // ✅ Keep artifacts for trace/debug
      archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
      archiveArtifacts artifacts: 'test-results/**', allowEmptyArchive: true
      archiveArtifacts artifacts: 'allure-results/**', allowEmptyArchive: true
      archiveArtifacts artifacts: 'allure-report/**', allowEmptyArchive: true
    }

    success {
      echo '🎉 Tests passed!'
    }

    failure {
      echo '❌ Tests failed. Check logs and report.'
    }
  }
}
