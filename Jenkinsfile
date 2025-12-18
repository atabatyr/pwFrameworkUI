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
  }

  post {
    always {
      echo '📦 Archiving reports'

      // ✅ JUnit results for Jenkins graphs
      junit 'test-results/**/*.xml'

      // ✅ Keep Playwright HTML + artifacts
      archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
      archiveArtifacts artifacts: 'test-results/**', allowEmptyArchive: true

      publishHTML(target: [
        reportDir: 'playwright-report',
        reportFiles: 'index.html',
        reportName: 'Playwright HTML Report',
        alwaysLinkToLastBuild: true,
        keepAll: true
      ])
    }

    success {
      echo '🎉 Tests passed!'
    }

    failure {
      echo '❌ Tests failed. Check logs and report.'
    }
  }
}
