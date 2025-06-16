#!/bin/bash
#
# Print banner art.

#######################################
# Print a board. 
# Globals:
#   BG_BROWN
#   NC
#   WHITE
#   CYAN_LIGHT
#   RED
#   GREEN
#   YELLOW
# Arguments:
#   None
#######################################
print_banner() {

clear

printf "${GREEN}";
printf "                                                \n";
printf "██╗  ██╗███╗   ███╗███████╗███╗   ██╗██╗   ██╗  \n";
printf "██║ ██╔╝████╗ ████║██╔════╝████╗  ██║██║   ██║  \n";
printf "█████╔╝ ██╔████╔██║█████╗  ██╔██╗ ██║██║   ██║  \n";
printf "██╔═██╗ ██║╚██╔╝██║██╔══╝  ██║╚██╗██║██║   ██║  \n";
printf "██║  ██╗██║ ╚═╝ ██║███████╗██║ ╚████║╚██████╔╝  \n";
printf "╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═══╝ ╚═════╝   \n";
printf "${NC}";


printf "\n"
  
printf "\n"

printf "${YELLOW}";
printf "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
printf "              Desenvolvedor: Eurico Junior                \n";
printf "              Whatsapp: +5519971395449                    \n";
printf "              E-Mail: euricotecnologia@gmail.com          \n";
printf "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
printf "${NC}";
printf "\n"
}
