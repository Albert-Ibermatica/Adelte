# Adelte - reconocimiento y segmentación de puertas de avión reales basado en deep learing

Adelte es una tecnologia que permite reconocer puertas de avión basada en un modelo de deep learning alojado
en un servidor AWS EC2. Permite reconcer puertas de avion tanto reales como de aviones de lego. 

Consta de 3 componentes:
Servidor Python flask con un socket.io que sirve de comunicacion entre cliente y EC2.

Cliente web, que permite interactuar con la aplicacion.

Servidor Amazon EC2 donde estan alojadas 2 instancias de Amazon Linux que tienen instalados
los modelos de deep learning que interpretan y devuelven las imagenes.

adelteclient y adelteclient video son casi iguales, solo que una muestra fotogramas en directo y la otra 
un video en directo en RTSP que es algo inestable.

# Guia de instalación - Entorno conda, servidor html, aws cli.

Es necesario instalar Conda y el entorno de ejecucion con las librerias

- Instalar miniconda: https://docs.conda.io/en/latest/miniconda.html

- Instalar el entorno conda desde el archivo requirements.txt

    conda create --name backend-websocket --python=3.10

    conda activate backend-websocket

    pip install -r requirements.txt

- Instalar y configurar AWS CLI

    - https://docs.aws.amazon.com/es_es/cli/latest/userguide/getting-started-install.html

    - Una vez instalado en la consola: aws configure

- Instalamos el xampp o apache2 en caso de ser linux: 

    - xampp: https://www.apachefriends.org/es/download.html

    - apache2: sudo apt-get install apache2

- Con las credenciales de la cuenta de Ibermatica se puede acceder a las instancias

    - https://us-east-1.console.aws.amazon.com/console/home?nc2=h_ct&region=us-east-1&src=header-signin#
