pipeline {
    agent any

    stages {
        stage('Pobierz repozytorium') {
            steps {
                git url: 'https://github.com/MaziWariat/projekt-1-grafik.git', branch: 'main'
            }
        }

        stage('Wdrożenie lokalne') {
            steps {
                sh 'rm -rf ~/grafik-deploy/*'
                sh 'cp -r * ~/grafik-deploy/'
            }
        }
    }
}

