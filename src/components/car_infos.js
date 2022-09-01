
import React from 'react'

export const contrat=[    
    "contrat",
    { name:"Année",label:"Annee" ,type:"text"},
    { name: "A.O. n°",label:"A_O_no", type:"text"},
    { name:"Contrat échu En Cours",label:"Contrat_echu_En_Cours" ,type:"text"},
    { name:"Prestataire ",label:"Prestataire", type:"text"},
]

export const sous_contrat =[   
    "sous-contrat",
    { name:"Réf./Parc Contrat Loueur",label:"Ref_Parc_Contrat_Loueur" ,type:'text'},
    { name:"Parc",label:"No_Parc"  ,type:'text'},
    { name:"Durée",label:"Duree" ,type:'text'},
    { name:"Montant Mensuel H.T.",label:"Montant_Mensuel_H_T"  ,type:'text'},
    { name:"Date Début",label:"Date_Debut"  ,type:'text'},
    { name:"Date Fin",label:"Date_Fin"  ,type:'text'},
    { name:"Date Prévue de la Restitution",label:"Date_Prevue_de_la_Restitution"  ,type:'text'},
    { name:"Date Effective de la Restitution",label:"Date_Effective_de_la_Restitution"  ,type:'text'},
    { name:"KM Date de Retour",label:"KM_Date_de_Retour"  ,type:'text'},
    { name:"Remise Accodée",label:"Remise_Accodee"  ,type:'text'},
    { name:"Montant Mensuel H.T. * 48",label:"Montant_Mensuel_48"  ,type:'text'},
    { name:"Montant T.V.A ",label:"Montant_TVA_"  ,type:'text'},
    { name:"Montant T.T.C.",label:"Montant_TTC"  ,type:'text'},
    { name:"Montant T.T.C. * 48",label:"Montant_TTC_48"  ,type:'text'},
    { name:"Montant du Marché TTC ",label:"Montant_du_Marche_TTC"  ,type:'text'},
    { name:"Montant Franchise HT",label:"Montant_Franchise_HT" ,type:'text'},
    { name:"KM Limité à KM (+) (-)",label:"KM_Limite_a_KM"  ,type:'text'},
    { name:"KM Limité à ",label:"KM_Limite_a"  ,type:'text'},
    { name:"Fonct_SERVICE ",label:"Fonct_SERVICE"  ,type:'text'},
]
   
export const Conducteur = [        
    "Conducteur",
    { name:"Direction",label:"Direction" , type:'text'},
    { name:"Conducteur",label:"Conducteur" , type:'text'},
    { name:"Matricule",label:"Matricule" , type:'text'},
    { name:"Grade",label:"Grade" , type:'text'},
    { name:"Filiale",label:"Filiale" , type:'text'},
    { name:"TAG Jawaz n°",label:"TAG_Jawaz_n" , type:'text'},
    { name:"Plafond",label:" " , type:'text'},
    { name:"carte carburant",label:"carte_carburant" , type:'text'},
    { name:"Dotation",label:"Dotation" , type:'text'},
    { name:"Date expiration carte carburant",label:"Date_expirationD" , type:'text'},
]

export const vehicule =[
    "Vehicule",
    { name:"WW",label:"WW" , type:'text'},
    { name:"n° de Châssis",label:"n_de_Chassis" , type:'text'},
    { name:"D.M Circulation",label:"D_M_Circulation" , type:'text'},
    { name:"P.F.",label:"P_F_" , type:'text'},
    { name:"N° Immat.",label:"N_Immat" , type:'text'},
    { name:"Marque",label:"Marque" , type:'text'},
    { name:"Clés",label:"Cles" , type:'text'},
    { name:"Couleur",label:"Couleur" , type:'text'},
    { name:"Code Radio",label:"Code_Radio" , type:'text'},
    { name:"Réf. Pneus",label:"Ref_Pneus" , type:'text'},
    { name:"RECO.ATTR. VEHICULE",label:"RECO_ATTR_VEHICUL" , type:'text'},
    { name:"Échéance Aut.Circulation",label:"Echeance_Aut_Circulation" , type:'text'},
    { name:"Échéance Visite Tech.",label:"Echeance_Visite_Tech" , type:'text'},
    { name:"Assurance Contrat En Cours",label:"Assurance_Contrat_En_Cours" , type:'text'},
    { name:"Cartes Verte",label:"Cartes_Verte" , type:'text'},
    { name:"Vignète",label:"Vignete" ,type:'text'},
    
]
export const infos=sous_contrat.concat(Conducteur.concat(vehicule))
