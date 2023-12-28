pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout your source code from Git
                git 'git@github.com:HassenM3/angularToBeDeleted.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                // Build Docker Image
                docker.build("angular-app")
            }
        }

        stage('Run Docker Container') {
            steps {
                // Run Docker Container
                docker.image("angular-app").run("-p 4200:4200 --name angular-container -d")
            }
        }


        stage('Cleanup') {
            steps {
                // Stop and remove the Docker container
                script {
                    docker.image("angular-app").stopContainer("angular-container")
                    docker.image("angular-app").removeContainer("angular-container")
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded!'

            // Additional success post-build steps can be added here
        }
        failure {
            echo 'Pipeline failed!'

            // Additional failure post-build steps can be added here
        }
    }
}
