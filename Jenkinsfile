pipeline {
  agent any

  tools {
    nodejs 'node24' // This must match the Node.js tool name in Jenkins
  }

  environment {
    NODE_ENV = 'test'
  }

  stages {
    stage('Install Dependencies') {
      steps {
        sh 'npm ci'
        sh 'npx playwright install --with-deps'
      }
    }

    stage('Run Playwright Tests (Chromium)') {
      steps {
        sh 'npm run test:chromium'
      }
    }

    stage('Archive Reports') {
      steps {
        archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
        archiveArtifacts artifacts: 'test-results/**', allowEmptyArchive: true
      }
    }
  }

  post {
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
      echo '❌ Tests failed. Check report.'
    }
    always {
      echo '✅ Build complete.'
    }
  }
}
