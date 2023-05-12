pipeline {
    agent any
    
    tools{nodejs "Node 18.16"}

    environment {
        def buildDestination = '/var/www/lelo-client'
        def workDirectory = '/var/lib/jenkins/workspace'
    }

    stages {
        stage ('Test') {
            steps {
                echo 'Test Skipped'
            }
        }
        stage ('Build') {
            steps {
                sh 'npm i'
                sh 'npm run build-dev'    
            }
        }
        stage ('Deploy') {
            steps {
                dir(buildDestination) {
                    sh 'pwd'
                    sh 'sudo rm -rf dist'
                }
                dir(workDirectory + '/' + env.JOB_BASE_NAME) {
                    sh 'sudo cp -r dist ${buildDestination}'
                }
                sh 'sudo nginx -t'
                sh 'sudo systemctl restart nginx'
            }
        }
    }
}
