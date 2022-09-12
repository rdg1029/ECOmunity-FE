pipeline {
    agent any

    environment {
        REACT_APP_FIREBASE_API_KEY=credentials("ecomunity-firebase-api-key")
        REACT_APP_FIREBASE_AUTH_DOMAIN=credentials("ecomunity-firebase-auth-domain")
        REACT_APP_FIREBASE_PROJECT_ID=credentials("ecomunity-firebase-project-id")
        REACT_APP_FIREBASE_STORAGE_BUCKET=credentials("ecomunity-firebase-storage-bucket")
        REACT_APP_FIREBASE_MESSAGING_SENDER_ID=credentials("ecomunity-firebase-messaging-sender-id")
        REACT_APP_FIREBASE_APP_ID=credentials("ecomunity-firebase-app-id")
    }

    stages {
        stage("Set Variable") {
            steps {
                script {
                    DOCKERHUB_CREDENTIAL = "dockerhub-yymin1022"
                    DOCKER_IMAGE_NAME = "ecomunity-fe"
                    DOCKER_IMAGE_STORAGE = "yymin1022"
                    DOCKER_IMAGE_TAG = "test_build"
                }

                export REACT_APP_FIREBASE_API_KEY="${REACT_APP_FIREBASE_API_KEY}"
                export REACT_APP_FIREBASE_AUTH_DOMAIN="${REACT_APP_FIREBASE_AUTH_DOMAIN}"
                export REACT_APP_FIREBASE_PROJECT_ID="${REACT_APP_FIREBASE_PROJECT_ID}"
                export REACT_APP_FIREBASE_STORAGE_BUCKET="${REACT_APP_FIREBASE_STORAGE_BUCKET}"
                export REACT_APP_FIREBASE_MESSAGING_SENDER_ID="${REACT_APP_FIREBASE_MESSAGING_SENDER_ID}"
                export REACT_APP_FIREBASE_APP_ID="${REACT_APP_FIREBASE_APP_ID}"
            }
        }

        stage("Build Docker Image") {
            steps {
                script {
                    image = docker.build("${DOCKER_IMAGE_STORAGE}/${DOCKER_IMAGE_NAME}")
                }
            }
        }

        stage("Push Docker Image to Dockerhub") {
            steps {
                script {
                    docker.withRegistry("", DOCKERHUB_CREDENTIAL) {
                        image.push("$DOCKER_IMAGE_TAG")
                        image.push("latest")
                    }
                }
            }
        }
    }

}