
                                    function caracters()
                                    {
                                    var marque=[];
                                    var modele=[];
                                    var energie=[];
                                    var boite=[];
                                    var prix=[];
                                    marque[0]="Peugeot";
                                    modele[0]="508";
                                    energie[0]="Diesel";
                                    boite[0]="auto";
                                    prix[0]="50";
                            
                                    marque[1]="Renault";
                                    modele[1]="Talisman";
                                    energie[1]="Diesel";
                                    boite[1]="auto";
                                    prix[1]="50"
                            
                                    marque[2]="Mercedess";
                                    modele[2]="classe C220";
                                    energie[2]="Diesel";
                                    boite[2]="auto";
                                    prix[2]="70";
                            
                                    marque[3]="BMW";
                                    modele[3]="Serie 4";
                                    energie[3]="Diesel";
                                    boite[3]="auto";
                                    prix[3]="70";
                            
                                    var selection=document.getElementById("voitures").value;
                                    var jours=document.getElementById("nbj").value;
									var debut=document.getElementById("debut").value;
                                    var resultat;
                                    for (i=0; i<marque.length ; i++) 
                                    {
                                            if (marque[i]==selection && jours!=0 && debut!=0) 
                                            {
                                                document.getElementById("modele").value=modele[i];
                                                document.getElementById("energie").value=energie[i];
                                                document.getElementById("boite").value=boite[i];
                                                document.getElementById("prix").value=prix[i];
                                                document.getElementById("modele").value="";
                                                document.getElementById("energie").value="";
                                                document.getElementById("boite").value="";
                                                document.getElementById("prix").value="";
                                                if(jours>0 && jours<=180)
                                                {
												
													document.getElementById("modele").value="";
													document.getElementById("energie").value="";
													document.getElementById("boite").value="";
													document.getElementById("prix").value="";
												
                                                    document.getElementById("modele").value=modele[i];
                                                    document.getElementById("energie").value=energie[i];
                                                    document.getElementById("boite").value=boite[i];
                                                    document.getElementById("prix").value=prix[i];
                                                    resultat=document.getElementById("nbj").value*
                                                    document.getElementById("prix").value;
                                                    document.getElementById('afficher').innerHTML="Le montant à payer est de: "+resultat+" euros.";
													
												
													
                                                }
                                                else if(jours>180){
												
													document.getElementById("modele").value="";
													document.getElementById("energie").value="";
													document.getElementById("boite").value="";
													document.getElementById("prix").value="";
												
                                                    document.getElementById("modele").value=modele[i];
                                                    document.getElementById("energie").value=energie[i];
                                                    document.getElementById("boite").value=boite[i];
                                                    document.getElementById("prix").value=prix[i];
                                                    montant=document.getElementById("nbj").value*
                                                    document.getElementById("prix").value; 
                                                    remise=montant*10/100;
                                                    resultat=montant-remise;
                                                    document.getElementById('afficher').innerHTML="Vous bénéficiez pour cette location, une remie de: "+
                                                    " 10%."+"<br>"+"Le montant à payer est de: "+resultat+" euros."; 
													
                                                } 
                                                else
                                                {
                                                    document.getElementById("modele").value="";
                                                    document.getElementById("energie").value="";
                                                    document.getElementById("boite").value="";
                                                    document.getElementById("prix").value="";
                                                    document.getElementById("nbj").style.backgroundColor="red";
                                                    alert("remplissez ce champs avec un nombre positif");
                                                    break;
                                                }
                                        }
                                        else
                                                {
                                                  
                                                }
                                        
                                    }
                                }
                             