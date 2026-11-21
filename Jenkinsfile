pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Packaging the resume page...'
                archiveArtifacts artifacts: '*.html, *.css, *.js'
            }
        }

        stage('Test') {
            steps {
                script {
                    if (fileExists('index.html') && fileExists('styles.css') && fileExists('validate.js')) {
                        echo 'All required files found - test passed'
                    } else {
                        error 'A required file is missing'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the resume page...'
            }
        }
    }

    post {
        success { echo 'BUILD SUCCESS' }
        failure { echo 'BUILD FAILED' }
    }
}