function romai(n) {
    if (n > 0) {       
                if (n == 1) {                   
                    return "I";
                } else if (n == 2) {
                    return "II" ;
                } else if (n == 3) {
                return "III" ;
                }else if ((n + 1) % 5 == 0 && n % 10 != 0){
                    if (n > 30){
                        return "XXXIV";
                    }  else if (n > 20){
                    return "XXIV";
                    }else if (n > 10){
                        return "XIV";
                        } else{
                            return "IV";
                        }  
                }else if (n == 5) {
                return "V" ;
                }else if (n % 10 == 0) {
                    if (n == 30){
                        return "XXX";
                    }  else if (n == 20){
                    return "XX";
                    }else{
                        return "X";
                }   
            }       
        }

    return "";

}

romai(3);