pipeline {
  agent any

  tools {
    nodejs 'node24'
  }

  environment {
    NODE_ENV = 'test'
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

        // 🔍 Add Allure environment metadata
        sh '''
          mkdir -p allure-results
          echo "Browser=Chromium" >> allure-results/environment.properties
          echo "Playwright Version=1.57.0" >> allure-results/environment.properties
          echo "Node Version=$(node -v)" >> allure-results/environment.properties
        '''
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
      echo '📊 Publishing Allure report...'
      allure([
        reportBuildPolicy: 'ALWAYS',
        results: [[path: 'allure-results']]
      ])
    }
    success {
      echo '✅ Tests passed — Allure report is available.'
    }
    failure {
      echo '❌ Tests failed — Check Allure report for details.'
    }
  }
}
