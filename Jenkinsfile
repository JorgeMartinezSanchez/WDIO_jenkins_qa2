pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {
        steps {
            echo 'Instalando dependencias...'
            sh 'npm ci'
            echo 'Ejecutando pruebas con WebdriverIO...'
            sh 'npx wdio run wdio.conf.js'
        }
    }

    post {
        always {
            // Genera y publica el reporte de Allure
            allure([
                includeProperties: false,
                jdk: '',
                properties: [],
                reportBuildPolicy: 'ALWAYS', // Genera el reporte siempre, aunque fallen los tests
                results: [[path: 'myproject/target/allure-results']] // Ruta a los resultados crudos
            ])
        }
    }
}