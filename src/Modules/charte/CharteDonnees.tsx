import React, { useEffect, useState } from 'react'
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'
import useStyles from './style'
import Main from '../../Main/Main'

const rows = [
  {
    traitement: 'Création et gestion de votre compte sur le Site Pinte ',
    Duree: ' Suppression après trois (3) ans d’inactivité.'
  },
  {
    traitement: ' Traitement des commandes et livraison des produits, services et expériences ',
    Duree: ' Dix (10) ans après la confirmation de la commande.'
  },
  {
    traitement: ' Données bancaires lors des paiements en ligne ',
    Duree: 'Durée de la transaction. '
  },
  {
    traitement: ' Répondre aux questions adressées via le formulaire « Nous contacter »',
    Duree: 'Durée du traitement puis trois (3) ans après le traitement. '
  },
  {
    traitement: 'Gestion des réclamations et conformité  ',
    Duree:
      'Durée de la réclamation plus 5 ans à compter de sa résolution. En cas d’action en justice : durée de la procédure jusqu’à l’exécution totale de la décision de justice ou du protocole transactionnel.  '
  },
  {
    traitement:
      'Envoi d’informations sur les offres, actualités et évènements de la Maison Pinte  ',
    Duree: ' Sauf désinscription, Trois (3) ans à compter de votre dernier contact avec Pinte '
  },
  {
    traitement:
      'Afficher des publicités sur vos réseaux sociaux et ceux d’autres personnes comme vous ',
    Duree: ' Trois (3) ans à compter de votre dernier contact avec Pinte .'
  },
  {
    traitement: 'Sécurité et intégrité du Site ',
    Duree:
      ' Trois (3) à six (6) mois en fonction des opérations de sécurité et d’intégrité effectuées.'
  },
  {
    traitement: 'Prévention et détection des fraudes  ',
    Duree:
      ' Trois (3) à six (6) mois en fonction des enquêtes effectuées et de la durée des procédures juridiques (s’il y en a).'
  },
  {
    traitement: 'Géolocalisation ',
    Duree: '   Absence de conservation des données.'
  }
]

const CharteDonnees: React.FC = () => {
  const { classes } = useStyles()

  const [isBrowser, setIsBrowser] = useState(false)
  useEffect(() => {
    setIsBrowser(true)
  }, [])

  if (!isBrowser) {
    return null
  }
  return (
    <Main>
      <Grid className={classes.grid}>
        <Typography className={classes.titre}>Charte données personnelles & cookies</Typography>
        <Typography className={classes.titre3}>Dernière mise à jour : Novembre 2022</Typography>
        <Typography className={classes.titre4}>CHARTE DES DONNÉES PERSONNELLES</Typography>
        <Typography className={classes.titre3}>
          {' '}
          Nous respectons vos préoccupations concernant la protection de votre vie privée et de vos
          données personnelles. La présente Charte de données personnelles (la « Charte ») expose
          quelles sont les informations collectées et la manière dont sont traitées vos données à
          caractère personnel.
        </Typography>
        <Typography className={classes.titre3}>
          1. Identité et coordonnées du responsable de traitement Le site
        </Typography>
        <Typography className={classes.body1}>
          www.pinte.com (le « Site ») est opéré par EARL Pinte, dont le siège social est situé en
          France, 6 grand rue Lisse en Champagne 51300 , (“Pinte” ou “nous”) ayant la qualité de
          responsable de traitement au sens de la réglementation applicable en matière de données
          personnelles, ce qui inclut le Règlement Général de Protection des Données personnelles («
          RGPD ») du 27 avril 2016.
        </Typography>
        <Typography className={classes.body1}>
          Sauf indication contraire, l’affiliée EARL Pinte avec laquelle vous êtes en contact ou qui
          est mentionnée dans les mentions légales du Site ou dans tout autre document qui vous
          serait adressé, que ce soit dans votre pays de résidence ou à l’étranger, a la qualité de
          responsable conjoint de traitement avec EARL Pinte.
        </Typography>
        <Typography className={classes.titre3}>
          2. Comment sont collectées et utilisées vos données à caractère personnel ?
        </Typography>
        <Typography className={classes.body1}>
          Nous collectons vos données personnelles directement auprès de vous quand vous utilisez le
          Site et nos services ou automatiquement lorsque vous accédez au Site.
        </Typography>
        <Typography className={classes.body1}>
          Nous pouvons être amenés à traiter des données à caractère personnel des catégories
          suivantes.
        </Typography>
        <Typography className={classes.body1}>Informations que vous nous fournissez :</Typography>

        <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="Vos données d’identification"
              primary="Vos données d’identification telles que vos prénom, nom de famille,
              sexe, civilité, nationalité, date de naissance, adresse postale, pays
              de résidence, adresse électronique et numéro de téléphone"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="Vos
              préférences et vos centres d’intérêt"
              primary="  Vos
              préférences et vos centres d’intérêt"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="informations renseignées
              via le formulaire"
              primary="  Les informations renseignées
              via le formulaire « Nous contacter » "
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="informations renseignées
              via le formulaire"
              primary="  Les données bancaires telles
              que les détails de votre paiement "
            />
          </ListItem>
        </List>
        <Typography className={classes.body1}>
          Informations collectées automatiquement : Les données de connexion telles que votre
          adresse IP, les spécificités de votre terminal et vos logs de connexion.
        </Typography>
        <Typography className={classes.body1}>
          Nous sommes également susceptibles de recueillir indirectement des données personnelles
          vous concernant à partir d’autres sources, par exemple si vos données nous sont transmises
          par l’un de vos contacts ou par le biais d’un de nos partenaires tels que les réseaux
          sociaux (et notamment le fait que vous utilisez lesdits réseaux et vos identifiants
          publicitaires associés).
        </Typography>
        <Typography className={classes.body1}>
          Enfin, nous pouvons également être amenés à collecter des informations que vous nous
          fournissez à propos d'autres personnes, par exemple lorsque vous décidez d'acheter et
          d'envoyer des produits à quelqu'un, ou lorsque vous participez à un jeu sur notre Site et
          que vous souhaitez inviter des amis à jouer également. Nous utilisons lesdites
          informations uniquement pour répondre à vos demandes et n'enverrons pas de communications
          marketing à vos contacts à moins qu'ils choisissent de leur côté de recevoir des
          communications de notre part.
        </Typography>

        <Typography className={classes.titre3}>
          3. Fondements et finalités du traitement de vos données à caractère personnel
        </Typography>
        <Typography className={classes.body1}>
          Nous recueillons et traitons vos données à caractère personnel lorsque nous disposons d’un
          fondement légal pour le faire : Consentement de votre part (article 6 (1) (a) RGPD), afin
          de :
        </Typography>

        <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="Vos données d’identification"
              primary="   Utiliser un certain
              nombre de cookies. Pour plus d’informations concernant les cookies,
              vous pouvez consulter la Charte des Cookies"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="Vos
              préférences et vos centres d’intérêt"
              primary="  Vous envoyer des
              informations sur nos offres, actualités et évènements (newsletters,
              invitations et autres publications) ainsi que les offres, actualités
              et événements concernant les autres entités du groupe EARL Pinte soit
              par e-mail, SMS, MMS, téléphone ou courrier postal"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="informations renseignées
              via le formulaire"
              primary=" Vous montrer des
              annonces ciblées et trouver d’autres personnes comme vous sur les
              réseaux sociaux (en téléchargeant et en comparant vos données
              personnelles – par exemple votre adresse électronique – avec les
              informations que vous avez fournies sur les réseaux sociaux) (pour les
              internautes en Allemagne, Pologne et au Japon, où le consentement est
              requis)"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="informations renseignées
              via le formulaire"
              primary="   Personnaliser les contenus du Site "
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="informations renseignées
              via le formulaire"
              primary="  Mener des enquêtes de
              satisfaction (pour les internautes en Allemagne et en Italie, où le
              consentement est requis). "
            />
          </ListItem>
        </List>
        <Typography className={classes.body1}>
          Et/ou Exécution d’un contrat avec vous ou de mesures précontractuelles prises à votre
          demande (article 6 (1) (b) RGPD), afin de :
        </Typography>

        <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="Vos données d’identification"
              primary="   Créer un compte sur le Site puis le gérer"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="Vos
              préférences et vos centres d’intérêt"
              primary="
              Réserver
                    une visite  "
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="informations renseignées
              via le formulaire"
              primary=" Tout autre service, actuel ou futur en relation avec les
              services que nous fournissons et inscrit dans les conditions générales
              d’utilisation afférentes "
            />
          </ListItem>
        </List>

        <Typography className={classes.body1}>
          Et/ou Intérêts légitimes (article 6 (1) (f) RGPD) :
        </Typography>

        <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="Vos données d’identification"
              primary="Pour assurer la sécurité de notre Site et de ses utilisateurs
              et la conformité aux Conditions Générales d’Utilisation "
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="Vos
              préférences et vos centres d’intérêt"
              primary="  Pour améliorer
              nos produits et services et la relation avec nos clients en vous
              adressant suite à une transaction des informations sur nos offres,
              actualités et événements (newsletters, invitations et autres
              publications) sur des produits et/ou services analogues "
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="informations renseignées
              via le formulaire"
              primary="Réaliser des
              statistiques et mieux comprendre vos préférences et centres d’intérêt
               "
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="informations renseignées
              via le formulaire"
              primary="  Répondre à vos questions adressées via le formulaire « Nous
              contacter » ou d’autres formulaires similaires"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="informations renseignées
              via le formulaire"
              primary=" Vous montrer des
              publicités ciblées et trouver d'autres personnes comme vous sur les
              réseaux sociaux, pour les utilisateurs des pays où votre consentement
              n'est pas requis"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="informations renseignées
              via le formulaire"
              primary=" Mener des enquêtes de satisfaction, sous réserve
              d’un consentement requis aux termes de la règlementation de votre pays
              "
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="informations renseignées
              via le formulaire"
              primary="  Détecter et prévenir les fraudes."
            />
          </ListItem>
        </List>
        <Typography className={classes.body1}>
          Et/ou Respect de nos obligations légales (article 6 (1) (c) RGPD), afin de :
        </Typography>
        <Typography className={classes.body1}>
          Traiter toute réclamation, répondre à nos obligations légales et assurer la défense de nos
          intérêts en cas de litige ou d’action en justice.
        </Typography>
        <Typography className={classes.body1}>
          Lorsque nous vous demandons de nous fournir des données à caractère personnel, nous
          indiquons clairement si leur renseignement est obligatoire ou facultatif et les
          conséquences en cas de refus de votre part (par exemple, le fait que nous ne serons pas en
          mesure de traiter votre demande).
        </Typography>
        <Typography className={classes.titre3}>
          4. Destinataires des données à caractère personnel
        </Typography>
        <Typography className={classes.body1}>
          Conformément à la règlementation en vigueur, nous pouvons partager vos données
          personnelles avec :
        </Typography>
        <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="nos affiliés"
              primary="  Nos affiliés, pour vous fournir un contenu
              et des services pertinents"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="nos prestataires de service de paiement
              "
              primary=" Nos prestataires de service de paiement
              "
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="nos prestataires"
              primary="  Nos prestataires de service de paiement
              nos prestataires d’hébergement "
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="nos prestataires"
              primary="      Nos prestataires support et marketing
              (outils d’e-mailing, service client, service de billetterie, service
              d’analyse statistique) "
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText id="les réseaux sociaux " primary=" les réseaux sociaux  " />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="toutes autorités"
              primary="  Toutes autorités,
              juridiction ou tout autre tiers autorisé, lorsque la communication des
              données personnelles est requise par la loi, une disposition
              règlementaire ou une décision de justice ou si cette communication est
              nécessaire pour assurer la protection et la défense de nos droits "
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="tous acheteurs"
              primary="   Tous acheteurs en cas de restructuration de Pinte y compris la cession
              totale ou partielle d’actifs, fusion, absorption, acquisition,
              scission et plus généralement toute opération de réorganisation "
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="nos
              sous-traitants"
              primary="Nos sous-traitants."
            />
          </ListItem>
        </List>
        <Typography className={classes.body1}>
          Le Site peut contenir des liens vers d’autres sites internet à des fins de références
          uniquement. Dès lors, nous ne sommes pas responsables du contenu, du traitement des
          données personnelles ou des pratiques des sites internet tiers. Veuillez les contacter
          directement pour plus d’informations.
        </Typography>
        <Typography className={classes.titre3}>
          5. Transferts de données à caractère personnel
        </Typography>
        <Typography className={classes.body1}>
          Nous pouvons transférer des données personnelles vers des pays hors de l’Espace Economique
          Européen (« EEE »), y compris vers des pays qui ont des normes de protection des données
          différentes de celles qui s’appliquent dans l’EEE. Tout transfert de vos Données en dehors
          de l’EEE s’effectue moyennant des garanties appropriées conformes aux réglementations
          applicables en matière de protection des données personnelles. Une copie des garanties
          applicables peut être obtenue sur demande (en nous contactant comme indiqué ci-dessous).
        </Typography>
        <Typography className={classes.body1}>
          Pour toutes questions concernant les transferts de données personnelles en dehors de
          l’Espace Economique Européen, vous pouvez nous contacter à l’adresse indiquée ci-dessous
          (section « Coordonnées du délégué à la protection des données : Contact DPO).
        </Typography>
        <Typography className={classes.titre3}>
          6. Durée de conservation des données à caractère personnel
        </Typography>
        <Typography className={classes.body1}>
          Vos données à caractère personnelle sont conservées pendant toute la durée nécessaire à la
          finalité pour laquelle elles ont été collectées et seront détruites à l’issue de cette
          durée. Les durées de conservation des données sont listées dans la liste ci-dessous.
          Veuillez noter que vos données seront détruites dans un délai maximum d’un (1) mois à
          compter de votre demande de désinscription.
        </Typography>
        <Paper sx={{ marginBottom: 10 }} elevation={5}>
          <TableContainer component={Paper}>
            <Table stickyHeader sx={{ minWidth: 650 }} aria-label="Duréé retention table">
              <TableHead>
                <TableRow>
                  <TableCell>Traitement des données</TableCell>
                  <TableCell>Durée de conservation</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.traitement}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.traitement}
                    </TableCell>
                    <TableCell>{row.Duree}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        <Typography className={classes.titre3}>
          7. Modification de notre Charte de données personnelles & Cookies
        </Typography>
        <Typography className={classes.body1}>
          Nous sommes susceptibles de modifier occasionnellement la présente Charte. Nous vous
          encourageons à vérifier cette page régulièrement afin de vous assurer de votre accord avec
          toute modification. Vous serez informé des modifications soit par une mention spéciale sur
          notre Site (notamment via l’actualisation de la date située en haut de la présente
          Charte), soit par une notification par email.
        </Typography>
        <Typography className={classes.titre3}>8. Vos droits</Typography>
        <Typography className={classes.body1}>
          Vous disposez d’un droit d'accès et de rectification de vos données, ainsi que de celui
          d’en demander l’effacement, de vous opposer à leur traitement et d’en obtenir la
          limitation ou la portabilité dans les limites prévues par la loi, sous réserve des motifs
          légitimes impérieux dont nous pourrions justifier pour conserver vos données personnelles.
        </Typography>
        <Typography className={classes.body1}>
          Afin de répondre à votre demande, nous pouvons être amenés à vous demander de nous fournir
          un justificatif d’identité. Nous pouvons également vous demander de nous communiquer des
          informations ou justificatifs complémentaires. Nous nous efforcerons de répondre à votre
          demande dans les meilleurs délais. Vous pouvez à tout moment demander à ne plus recevoir
          nos communications relatives à nos offres, actualités et évènements en utilisant le lien
          hypertexte prévu à cet effet dans chaque email qui vous est adressé ou en envoyant un
          courrier ou mail aux adresses ci-dessous.
        </Typography>
        <Typography className={classes.body1}>
          Vous disposez également du droit de nous donner des instructions spécifiques concernant le
          sort de vos données après votre décès. Ces droits peuvent être exercés à tout moment en
          adressant un courrier ou un email aux adresses suivantes : Data Protection Officer (DPO) –
          6 grand rue Lisse en Champagne 51300 ou en envoyer un e-mail Contact DPO
        </Typography>
        <Typography className={classes.titre3}>
          9. Protection des personnes n’ayant pas atteint l’âge légal de consommation d’alcool
        </Typography>
        <Typography className={classes.body1}>
          L’accès au Site étant encadré par les Conditions Générales d’Utilisation, Pinte ne
          collecte aucune information ou donnée personnelle relative aux personnes n’ayant pas
          atteint l’âge légal de consommation et/ou d’achat d’alcool selon la législation en vigueur
          dans leur lieu de résidence.
        </Typography>
        <Typography className={classes.titre3}>
          10. Coordonnées du délégué à la protection des données (DPO) et droit d’introduire une
          réclamation
        </Typography>
        <Typography className={classes.body1}>
          Pour toute question en lien avec la collecte et le traitement de vos Données par Pinte,
          vous pouvez contacter le délégué à la protection des données de Pinte à l’adresse suivante
          « Délégué à la protection des données (DPO) », 6 grand rue Lisse en Champagne 51300 ou par
          mail Contact DPO Vous disposez également du droit de saisir la Commission Nationale de
          l’Informatique et des Libertés (CNIL), 3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX
          07, de toute réclamation se rapportant à la manière dont nous collectons et traitons vos
          Données.
        </Typography>
        <Typography className={classes.titre4}>CHARTE DES COOKIES</Typography>
        <Typography className={classes.titre3}>1. Cookies – de quoi s’agit-il ?</Typography>
        <Typography className={classes.body1}>
          Un « cookie » est un élément d’information, tel qu’un tag, qui est stocké sur votre
          ordinateur, tablette ou téléphone quand vous visitez un site internet. Il peut permettre
          d’identifier votre appareil – comme votre ordinateur, tablette ou téléphone- à chaque fois
          que vous visitez un site internet. La plupart des sites internet utilisent des cookies et
          c’est le cas de notre Site. Afin de vous offrir la meilleure expérience sur notre Site,
          quel que soit le type d’appareil utilisé, vous devez vous assurer que votre navigateur est
          paramétré de façon à accepter les cookies.
        </Typography>

        <Typography className={classes.titre3}>2. A quoi servent les cookies ?</Typography>
        <Typography className={classes.body1}>
          Nous utilisons des cookies et d’autres données stockées sur votre appareil afin de :
        </Typography>
        <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="meilleure expérience"
              primary=" Vous offrir une meilleure expérience de navigation
              sur le Site  "
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="informations de connexion
              "
              primary=" Vous permettre de paramétrer vos préférences
              (informations de connexion, choix du pays et de la langue)  "
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="Protéger
              votre sécurité"
              primary="  Protéger
              votre sécurité   "
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="Mesurer et améliorer"
              primary="   Mesurer et améliorer les services proposés sur le
              Site  "
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="Collaborer "
              primary="  Collaborer avec nos partenaires et évaluer nos actions
              marketing "
            />
          </ListItem>
        </List>

        <Typography className={classes.titre3}>
          3. Quelles sont les informations concernées par les cookies ?
        </Typography>

        <Typography className={classes.body1}>Un cookie va principalement contenir :</Typography>
        <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="nom du site"
              primary=" Le nom du site internet d’où il
              provient"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="Combien de temps
              "
              primary=" Combien de temps le cookie sera stocké sur votre appareil"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="numéro unique"
              primary="  Un numéro unique – généralement attribué de manière aléatoire  "
            />
          </ListItem>
        </List>
        <Typography className={classes.titre3}>
          4. Les cookies que nous utilisons sur le Site
        </Typography>
        <Typography className={classes.body1}>
          {' '}
          Nous utilisons les catégories de cookies suivantes sur le Site :
        </Typography>
        <Typography className={classes.body1}>
          - Catégorie 1 : les cookies strictement nécessaires Ces cookies sont essentiels pour vous
          permettre de naviguer sur le Site et profiter de ses fonctionnalités. Sans ces cookies,
          les services que vous demandez, tel que se souvenir de votre identifiant, ne peuvent pas
          être fournis.
        </Typography>
        <Typography className={classes.body1}>
          - Catégorie 2 : les cookies de performance Ces cookies collectent des informations
          anonymes sur la façon dont les personnes naviguent sur le Site. A titre d’exemple, nous
          utilisons des cookies de Google Analytics pour nous aider à comprendre comment les
          utilisateurs arrivent sur le Site, y naviguent ou utilisent le Site et ainsi mettre en
          évidence les points d’amélioration notamment en matière de navigation et de campagnes
          marketing. Les données stockées via ces cookies n’enregistrent aucune donnée permettant
          d’identifier une personne en particulier.
        </Typography>
        <Typography className={classes.body1}>
          - Catégorie 3 : les cookies de fonctionnalités Ces cookies permettent de se souvenir de
          vos choix tels que le lieu à partir duquel vous vous êtes connecté, vos préférences de
          langue, vos critères de recherche en matière de produits ou de services. Ces informations
          peuvent servir à vous proposer une expérience plus personnalisée et davantage pertinente à
          vos attentes. Les informations collectées via ces cookies peuvent être anonymisées et ne
          permettent pas de suivre vos navigations sur d’autres sites internet.
        </Typography>
        <Typography className={classes.body1}>
          - Catégorie 4 : Cookies de ciblage et publicitaires Ces cookies collectent des
          informations sur vos habitudes de navigation afin de rendre la publicité plus pertinente
          pour vous et par rapport à vos centres d’intérêt. Ils sont aussi utilisés pour limiter le
          nombre de fois où vous verrez une publicité et mesurer l’efficacité d’une campagne
          publicitaire. Ces cookies sont généralement placés par des réseaux publicitaires de tiers.
          Ils se souviennent des sites internet que vous visitez et ces informations sont partagées
          avec des tiers tels que des annonceurs. A titre d’exemple, nous utilisons des cookies de
          tiers pour vous fournir des publicités personnalisées quand vous visitez d’autres sites
          internet.
        </Typography>
        <Typography className={classes.body1}>
          - Catégorie 5 : Cookies de réseaux sociaux Ces cookies vous permettent de partager des
          contenus du Site sur les réseaux sociaux tels que Facebook, Instagram ou Twitter. Ces
          cookies ne sont pas contrôlés par Moët & Chandon. Nous vous invitons à consulter les
          chartes de données personnelles des réseaux sociaux concernés pour en savoir plus sur le
          fonctionnement de leurs cookies. Vous pouvez accéder à la liste des cookies que nous
          utilisons et gérer vos consentements en cliquant ici. Vous pouvez accéder à la liste des
          entités et partenaires qui déposent des cookies sur notre Site en cliquant ici.
        </Typography>
        <Typography className={classes.titre3}>
          5. Pendant combien de temps les cookies sont-ils stockés sur mon appareil ?
        </Typography>
        <Typography className={classes.body1}>
          Les cookies de session ne restent stockés sur votre appareil que pendant la durée de votre
          session internet. Ils ne sont pas stockés sur votre disque dur. Ils sont généralement
          utilisés pour suivre les pages que vous visitez pour pouvoir vous proposer une expérience
          plus personnalisée durant votre visite sur le Site. Les cookies persistants sont stockés
          sur le disque dur de votre appareil jusqu’à ce que vous les supprimiez ou qu’ils
          atteignent leur date d’expiration.
        </Typography>
        <Typography className={classes.body1}>
          Ces cookies peuvent, par exemple, être utilisés pour se souvenir de vos préférences quand
          vous utilisez le Site. Ces informations collectées via les cookies sont conservées pendant
          une durée de vingt-cinq (25) mois maximum et la durée de vie de ces cookies ne dépassera
          pas treize (13) mois à compter de la date de consentement.
        </Typography>
        <Typography className={classes.titre3}>
          6. Que puis-je faire pour gérer les cookies stockés sur mon appareil ?
        </Typography>
        <Typography className={classes.body1}>
          Vous pouvez accepter ou refuser les cookies. Accepter les cookies est généralement la
          meilleure façon de s’assurer que vous bénéficierez de la meilleure expérience de
          navigation sur le Site.
        </Typography>
        <Typography className={classes.body1}>
          Vous devez expressément consentir à l’utilisation de cookies et vous pouvez modifier le
          paramétrage pour restreindre, bloquer ou supprimer les cookies si tel est votre choix.
          Pour cela vous disposez de deux outils :
        </Typography>
        <Typography className={classes.body1}>
          - Vous pouvez accéder à notre outil de gestion des cookies, modifier vos préférences et
          connaitre la liste exhaustive des sociétés utilisant des cookies sur notre Site en
          cliquant ici.
        </Typography>
        <Typography className={classes.body1}>
          - Vous pouvez consulter la rubrique « Aide » de votre navigateur (ordinateur, tablette ou
          téléphone) pour savoir comment changer vos préférences en matière de cookies. Beaucoup de
          navigateurs disposent de facilité de paramétrage des cookies pour faciliter l’expression
          de vos choix en la matière.
        </Typography>
        <Typography className={classes.titre3}>
          7. Que se passe-t-il si je n’accepte pas les cookies ?
        </Typography>
        <Typography sx={{ marginBottom: 10 }} className={classes.body1}>
          Si vous refusez les cookies, certains aspects du Site peuvent ne pas fonctionner sur votre
          appareil et vous pourriez ne pas pouvoir accéder à certaines zones du Site. Pour une
          navigation optimale, nous vous recommandons d’accepter les cookies.
        </Typography>
      </Grid>
    </Main>
  )
}
export default CharteDonnees
