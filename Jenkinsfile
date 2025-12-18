pipeline {
  agent any

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
        sh 'npx playwright install'
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
      archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
      archiveArtifacts artifacts: 'test-results/**', allowEmptyArchive: true
    }

    success {
      echo '🎉 Tests passed!'
      publishHTML(target: [
        reportDir: 'playwright-report',
        reportFiles: 'index.html',
        reportName: 'Playwright HTML Report',
        alwaysLinkToLastBuild: true,
        keepAll: true
      ])
    }

    failure {
      echo '❌ Tests failed. Check logs and report.'
    }
  }
}
