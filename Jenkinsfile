pipeline {
   agent {
        docker {
            // Use an official Jenkins agent with Docker
            image 'jenkins/inbound-agent:4.7-1'
            args '-v /var/run/docker.sock:/var/run/docker.sock --network=host'
        }
    }
    stages {


        stage('Build Docker Image') {
            steps {
            script {
                // Build Docker Image
                docker.build("angular-app")
                }
            }
        }

        stage('Run Docker Container') {
            steps {
            script {
                // Run Docker Container
                docker.image("angular-app").run("-p 4200:4200 --name angular-container -d")
                }
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
