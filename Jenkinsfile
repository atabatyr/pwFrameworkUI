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
  }

  post {
    always {
      echo '📊 Generating Allure report (always)'

      // ✅ Generate Allure even if tests FAILED
      sh 'npm run allure:generate || true'

      // ✅ Publish Allure inside Jenkins UI
      publishHTML(target: [
        reportDir: 'allure-report',
        reportFiles: 'index.html',
        reportName: 'Allure Report',
        alwaysLinkToLastBuild: true,
        keepAll: true
      ])

      // ✅ JUnit for Jenkins graphs
      junit 'test-results/**/*.xml'

      // ✅ Archive everything for debugging
      archiveArtifacts artifacts: 'allure-results/**', allowEmptyArchive: true
      archiveArtifacts artifacts: 'allure-report/**', allowEmptyArchive: true
      archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
      archiveArtifacts artifacts: 'test-results/**', allowEmptyArchive: true
    }

    success {
      echo '🎉 Tests passed!'
    }

    failure {
      echo '❌ Tests failed — Allure report still available'
    }
  }
}
