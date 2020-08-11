pipeline {
    agent {
        label "linux && docker"
    }
    options {
        timestamps()
        ansiColor("xterm")
        buildDiscarder(logRotator(numToKeepStr: "30"))
        timeout(time: 1, unit: "HOURS")
    }
    environment {
        DEPLOY_PIPELINE_IMAGE = '458176070654.dkr.ecr.us-east-1.amazonaws.com/jenkins/deployment_package:v7'
    }

    stages {
        stage("Setup") {
            steps {
                echo "Will publish Zendesk Integration"
                
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/C4ZD-5']],
                    userRemoteConfigs: [[url: 'https://bitbucket.org/coveord/zendeskintegration',credentialsId:'bitbucket-anti-throttling-02']],
                    clean: true
                ])
                
                withDockerContainer(image: "node:lts-alpine", args: "-u root:root") {
                    sh "npm install"
                    sh "npm run setup"
                    sh "npm run build"
                }
            }
        }

        stage("Test package") {
            steps {
                withDockerContainer(image: DEPLOY_PIPELINE_IMAGE) {
                    sh "deployment-package package create --dry-run"
                }
            }
        }

        stage("Deploy") {
            steps {
                withDockerContainer(image: DEPLOY_PIPELINE_IMAGE) {
                    script {
                        packageName = sh (script: "deployment-package package create", returnStdout: true).trim()
                        sh "deployment-package package deploy --package-name ${packageName} --target-environment dev"
                    }
                }
            }
        }
    }
}