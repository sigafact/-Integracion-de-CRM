#!/bin/bash

# get_mysql_root_password() {
  
#   print_banner
#   printf "${WHITE} 💻 Ingrese la contraseña para el usuario de implementación y base de datos (no utilice caracteres especiales):${GRAY_LIGHT}"
#   printf "\n\n"
#   read -p "> " mysql_root_password
# }

# get_link_git() {
  
#   print_banner
#   printf "${WHITE} 💻 Ingresa el enlace de Github de la instalación que deseas instalar:${GRAY_LIGHT}"
#   printf "\n\n"
#   read -p "> " link_git
# }

get_instancia_add() {
  
  print_banner
  printf "${WHITE} 💻 Ingrese un nombre para la Instancia/Compañía que se instalará (No utilice espacios ni caracteres especiales, utilice letras minúsculas):${GRAY_LIGHT}"
  printf "\n\n"
  read -p "> " instancia_add
}

get_max_whats() {
  
  print_banner
  printf "${WHITE} 💻 Introduzca el número de conexiones que tiene el ${instancia_add} Puedes registrarte:${GRAY_LIGHT}"
  printf "\n\n"
  read -p "> " max_whats
}

get_max_user() {
  
  print_banner
  printf "${WHITE} 💻 Ingrese el número de usuarios/asistentes que ${instancia_add} puede registrar:${GRAY_LIGHT}"
  printf "\n\n"
  read -p "> " max_user
}

get_frontend_url() {
  
  print_banner
  printf "${WHITE} 💻 Ingresa el dominio FRONTEND para ${instancia_add}:${GRAY_LIGHT}"
  printf "\n\n"
  read -p "> " frontend_url
}

get_backend_url() {
  
  print_banner
  printf "${WHITE} 💻 Ingresa el dominio BACKEND para ${instancia_add}:${GRAY_LIGHT}"
  printf "\n\n"
  read -p "> " backend_url
}

get_frontend_port() {
  
  print_banner
  printf "${WHITE} 💻 Ingrese el puerto FRONTEND para ${instance_add}; Ex: 3000 A 3999 ${GRAY_LIGHT}"
  printf "\n\n"
  read -p "> " frontend_port
}


get_backend_port() {
  
  print_banner
  printf "${WHITE} 💻 Ingrese el puerto BACKEND para esta instancia; Ex: 4000 A 4999 ${GRAY_LIGHT}"
  printf "\n\n"
  read -p "> " backend_port
}

get_redis_port() {
  
  print_banner
  printf "${WHITE} 💻 Ingrese el puerto REDIS/MSG SCHEDULE para ${instance_add}; Ex: 5000 A 5999 ${GRAY_LIGHT}"
  printf "\n\n"
  read -p "> " redis_port
}

get_empresa_delete() {
  
  print_banner
  printf "${WHITE} 💻 Ingrese el nombre de la Instancia/Empresa que será Eliminada (Escriba el mismo nombre que usó al instalar):${GRAY_LIGHT}"
  printf "\n\n"
  read -p "> " empresa_delete
}

get_empresa_atualizar() {
  
  print_banner
  printf "${WHITE} 💻 Digite o nome da Instancia/Empresa que deseja Atualizar (Digite o mesmo nome de quando instalou):${GRAY_LIGHT}"
  printf "\n\n"
  read -p "> " empresa_atualizar
}

get_empresa_bloquear() {
  
  print_banner
  printf "${WHITE} 💻 Digite o nome da Instancia/Empresa que deseja Bloquear (Digite o mesmo nome de quando instalou):${GRAY_LIGHT}"
  printf "\n\n"
  read -p "> " empresa_bloquear
}

get_empresa_desbloquear() {
  
  print_banner
  printf "${WHITE} 💻 Digite o nome da Instancia/Empresa que deseja Desbloquear (Digite o mesmo nome de quando instalou):${GRAY_LIGHT}"
  printf "\n\n"
  read -p "> " empresa_desbloquear
}

get_empresa_dominio() {
  
  print_banner
  printf "${WHITE} 💻 Digite o nome da Instancia/Empresa que deseja Alterar os Dominios (Atenção para alterar os dominios precisa digitar os 2, mesmo que vá alterar apenas 1):${GRAY_LIGHT}"
  printf "\n\n"
  read -p "> " empresa_dominio
}

get_alter_frontend_url() {
  
  print_banner
  printf "${WHITE} 💻 Ingrese el dominio NUEVO FRONTEND/PANEL para el ${empresa_dominio}:${GRAY_LIGHT}"
  printf "\n\n"
  read -p "> " alter_frontend_url
}

get_alter_backend_url() {
  
  print_banner
  printf "${WHITE} 💻 Digite o NOVO domínio do BACKEND/API para a ${empresa_dominio}:${GRAY_LIGHT}"
  printf "\n\n"
  read -p "> " alter_backend_url
}

get_alter_frontend_port() {
  
  print_banner
  printf "${WHITE} 💻 Ingrese el puerto FRONTEND de la Instancia/Empresa ${empresa_dominio}; El puerto debe ser el mismo que el proporcionado durante la instalación. ${GRAY_LIGHT}"
  printf "\n\n"
  read -p "> " alter_frontend_port
}


get_alter_backend_port() {
  
  print_banner
  printf "${WHITE} 💻 Ingrese el puerto BACKEND de la Instancia/Compañía ${empresa_dominio}; El puerto debe ser el mismo que el proporcionado durante la instalación. ${GRAY_LIGHT}"
  printf "\n\n"
  read -p "> " alter_backend_port
}


get_urls() {
  # get_mysql_root_password
  # get_link_git
  get_instancia_add
  get_max_whats
  get_max_user
  get_frontend_url
  get_backend_url
  get_frontend_port
  get_backend_port
  get_redis_port
}

# software_update() {
#   get_empresa_atualizar
#   frontend_update
#   backend_update
# }

software_delete() {
  get_empresa_delete
  deletar_tudo
}

software_bloquear() {
  get_empresa_bloquear
  configurar_bloqueio
}

software_desbloquear() {
  get_empresa_desbloquear
  configurar_desbloqueio
}

software_dominio() {
  get_empresa_dominio
  get_alter_frontend_url
  get_alter_backend_url
  get_alter_frontend_port
  get_alter_backend_port
  configurar_dominio
}

inquiry_options() {
  
print_banner

# Menu principal
printf "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
printf "💻 ${YELLOW}Bienvenido a ${GREEN}Kmenu 5.0${YELLOW}! Seleccione la siguiente acción a continuación:${NC}\n"
printf "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"
printf "\n"

printf "${WHITE}   [${GREEN}1${WHITE}] ${BLUE}Instalar ${NC}\n"
printf "${WHITE}   [${GREEN}2${WHITE}] ${BLUE}Eliminar ${NC}\n"
printf "${WHITE}   [${GREEN}3${WHITE}] ${BLUE}Bloquear ${NC}\n"
printf "${WHITE}   [${GREEN}4${WHITE}] ${BLUE}Desbloquear ${NC}\n"
printf "${WHITE}   [${GREEN}5${WHITE}] ${BLUE}Cambiar dominio ${NC}\n"
printf "\n"
printf "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"

# Input do usuário
read -p "$(printf "${GREEN}❯${NC} ") " option

  case "${option}" in
    1) get_urls ;;

    # 1) 
    #   software_update 
    #   exit
    #   ;;

    2) 
      software_delete 
      exit
      ;;
    3) 
      software_bloquear 
      exit
      ;;
    4) 
      software_desbloquear 
      exit
      ;;
    5) 
      software_dominio 
      exit
      ;;        

    *) exit ;;
  esac
}