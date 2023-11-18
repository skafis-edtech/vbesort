# VBE-sort

## For developers
### Run publicly
1. Generate SSL certificate (put into ./letsencrypt)
... (coming soon)


### Tech
- Wordpress (with apache?)
- mysql
- nginx
- Let's encrypt (with certbot)
- Domain
- AWS EC2

### install docker and docker compose on ubuntu server
```
sudo apt-get update
sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
sudo apt-get install docker-ce
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo usermod -aG docker ubuntu
newgrp docker 
sudo systemctl start docker
sudo systemctl enable docker
sudo chmod 666 /var/run/docker.sock
```