pipeline{
    agent any{
        stages{
            stage('checkout'){
                steps{
                    checkout scm
                }
            }

            stage('check files'){
                steps{
                    echo 'checking files...'
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
            
            stage('deploy'){
                steps{
                    echo 'deploying ts'
                }
            }
        }
    }
}