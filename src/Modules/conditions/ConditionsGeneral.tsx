import React, { useEffect, useState } from 'react'
import { Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'
import useStyles from '@/Modules/charte/style'
import Main from '../../Main/Main'

const ConditionsGeneral: React.FC = () => {
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
        <Typography className={classes.titre}>Conditions générales d’utilisation</Typography>
        <Typography className={classes.titre3}>Dernière mise à jour : Novembre 2022</Typography>
        <Typography className={classes.titre3}>1. EDITEUR – CONTACT</Typography>
        <Typography className={classes.body1}>
          Le site Internet www.champagne-pinte.com (ci-après le "Site") est édité par EARL Pinte,
          Société en commandite Simple :
        </Typography>
        <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText id="capital" primary="capital social : 169 860 euros" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="immatriculation"
              primary="numéro d’immatriculation:
              Chalons-en-Champagne D 434 576 690"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="TVA"
              primary="numéro de TVA : FR 304 34 57 66 90 N° tél : +33 6 40 91 27 78"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="siège"
              primary="adresse du siège social : 6 grand rue Lisse en Champagne
              51300, FRANCE "
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="publication"
              primary="Directeur de publication : Benjamin Pinte, Gérant."
            />
          </ListItem>
        </List>
        <Typography className={classes.body1}>
          Pour toute question relative au Site, veuillez envoyer un e-mail à l'adresse électronique
          suivante : Nous contacter
        </Typography>
        <Typography className={classes.titre3}>2. HÉBERGEUR</Typography>
        <Typography className={classes.body1}>
          Le Site est hébergé par la société Amazon Web Services EMEA SARL (« AWS Europe »)
        </Typography>
        <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="adresse"
              primary="adresse du siège social
              :38 AV JOHN F KENNEDY L 1855 LUXEMBOURG LUXEMBOURG "
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText id="tél" primary="N° tél : +33 (0)6 40 91 27 78" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="d’immatriculation"
              primary="N° d’immatriculation : 831 001 334 R.C.S. Nanterre"
            />
          </ListItem>
        </List>
        <Typography className={classes.titre4}>
          CONDITIONS GENERALES D’UTILISATION DU SITE INTERNET
        </Typography>
        <Typography className={classes.body1}>
          Le Site est publié par EARL Pinte en commandite simple au capital social de 169 860 euros,
          immatriculée au RCS de Chalons-en-Champagne sous le numéro 434 576 690 et dont le siège
          social est situé 6 grand rue Lisse en Champagne 51300 (ci-après "La Société").
        </Typography>
        <Typography className={classes.body1}>
          L’utilisation du Site par toute personne (ci-après "vous" ou "l’utilisateur"), quel que
          soit l’objet de sa visite, est régie par les présentes conditions générales d’utilisation
          (ci-après les "Conditions Générales d’Utilisation"). Les Conditions Générales
          d’Utilisation ont pour objet de définir les conditions d’accès, de navigation et
          d’utilisation du Site.
        </Typography>
        <Typography className={classes.body1}>
          En accédant et utilisant le Site, vous acceptez sans réserve l’application des Conditions
          Générales d'Utilisation et des clauses applicables en matière de protection des données
          personnelles (voir la Charte données personnelles & cookies).
        </Typography>
        <Typography className={classes.body1}>
          La Société peut à tout moment modifier et mettre à jour les Conditions Générales
          d'Utilisation et la Charte données personnelles & cookies. L’utilisateur est invité à les
          consulter en ligne régulièrement.
        </Typography>
        <Typography className={classes.body1}>
          Pour accéder au Site, vous devez avoir atteint l’âge légal de consommation et/ou d’achat
          d’alcool selon la législation en vigueur dans votre lieu de résidence (l’âge le plus élevé
          étant celui pris en considération).
        </Typography>
        <Typography className={classes.body1}>
          Si aucun âge légal n’existe dans votre lieu de résidence, vous devez avoir au moins 21 ans
          pour accéder au Site.
        </Typography>
        <Typography className={classes.titre3}>1. NAVIGATION SUR LE SITE</Typography>
        <Typography className={classes.titre3}>1.1. ACCÈS AU SITE</Typography>
        <Typography className={classes.body1}>
          Les matériels et logiciels nécessaires pour l’accès à Internet et au Site relèvent de la
          responsabilité des utilisateurs du Site. La Société se réserve le droit, à sa seule
          discrétion, de suspendre ou mettre fin à l’accès à tout ou partie du Site, de son contenu
          ou services proposés sur le Site, sans notification préalable et sans que cela soit
          susceptible de donner lieu à une quelconque indemnisation au profit d’un utilisateur. Il
          est strictement interdit de modifier les éléments logiciels du Site en vue d'obtenir un
          accès non autorisé au Site.
        </Typography>
        <Typography className={classes.titre3}>1.2 LIENS HYPERTEXTES</Typography>
        <Typography className={classes.body1}>
          Le Site peut présenter des liens vers d’autres sites ou d'autres sources Internet. Dans la
          mesure où la Société ne peut contrôler ces sites et ces sources externes, la Société ne
          saurait être tenue responsable du contenu, publicités, produits, services ou tout autre
          élément disponible sur ces sites ou sources externes. De plus, la Société ne pourra être
          tenue responsable de tous dommages ou pertes (avérés ou allégués) découlant directement ou
          indirectement de l'utilisation du contenu, des biens ou services disponibles sur ces sites
          ou sources externes.
        </Typography>
        <Typography className={classes.titre3}>1.3 COMPORTEMENT DES UTILISATEURS</Typography>
        <Typography className={classes.body1}>Chaque utilisateur du Site garantit :</Typography>

        <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="l’âge légal"
              primary=" avoir l’âge légal requis pour consommer et/ou acheter de l’alcool
              selon la législation en vigueur dans son lieu de résidence ;"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="fins licites"
              primary="utiliser
          le Site à des fins licites et personnelles, à l’exclusion de toute
          utilisation à des fins commerciales, sauf accord écrit et préalable de
          la Société;"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="données"
              primary="que, le cas échéant, les données qu’il fournit sont
              exactes, sincères et à jour.  "
            />
          </ListItem>
        </List>
        <Typography className={classes.body1}>
          Il est interdit à l’utilisateur de faire toutes déclarations et/ou d’agir au nom et/ou
          pour le compte de la Société, de ses filiales et sociétés affiliées ainsi que de leurs
          actionnaires, administrateurs, dirigeants et salariés respectifs, pour quelque cause que
          ce soit. Les utilisateurs doivent avoir sur le Site un comportement responsable, licite,
          courtois et respectueux à l’égard des droits des autres utilisateurs du Site, de la
          Société, de ses sociétés affiliées et des tiers.
        </Typography>
        <Typography className={classes.body1}>
          L’utilisateur doit notamment s’abstenir de :
        </Typography>
        <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="télécharger"
              primary="Télécharger vers le Site,
              afficher, envoyer par courrier électronique ou transmettre par tout
              autre moyen tout élément contenant des virus logiciels, ou autres
              codes, fichiers ou programmes informatiques conçus pour interrompre,
              détruire ou limiter les fonctionnalités de tout logiciel ou matériel
              informatique ou de tout équipement de télécommunication ; "
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="perturber"
              primary="Perturber ou interrompre le fonctionnement du Site, des serveurs ou
              réseaux connectés au Site ou enfreindre les exigences, procédures,
              règles ou réglementations s’y rapportant ; "
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="atteinte"
              primary="Tenter de porter atteinte
              au fonctionnement du Site , notamment en exposant le Site à un virus,
              en causant une surcharge de consultation (bande passante), en
              surchargeant le serveur, en envoyant des spams ou en surchargeant le
              service de messagerie du Site ; "
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="pas destinées"
              primary="Consulter des informations qui ne lui
              sont pas destinées ou accéder à un serveur ou un compte auquel
              l’utilisateur n’est pas autorisé à accéder ; "
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="chercher à évaluer"
              primary="Chercher à évaluer, à
              constater ou à tester la vulnérabilité du Site, ou enfreindre les
              mesures de sécurité ou d’authentification du Site sans l’accord écrit
              préalable de la Société; "
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="exercer une activité illégale"
              primary=" Exercer une activité illégale ou toute autre
              activité susceptible de porter préjudice aux droits de la Société, de
              ses fournisseurs, prestataires, détaillants, annonceurs ou autres
              personnes, et s’abstenir d’y inciter des tiers ;"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="junk mails, des spams, des chaînes de lettres"
              primary="Télécharger vers le
              Site, transmettre, poster ou mettre par tout moyen à disposition des
              éléments publicitaires ou promotionnels non sollicités ou non
              autorisés, des junk mails, des spams, des chaînes de lettres ou
              toute autre forme de sollicitation ; "
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="obscène, menaçant, violent,"
              primary="Télécharger vers le Site,
              afficher, envoyer par courrier électronique ou transmettre un contenu
              illégal, préjudiciable, diffamatoire, offensant, raciste, vulgaire,
              obscène, menaçant, violent, contraire aux bonnes mœurs, portant
              atteinte à la vie privée d’une personne, désobligeant ou choquant
              notamment d’un point de vue racial ou ethnique ;"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="donacheter de l’alcoolnées"
              primary="Envoyer par courrier
              électronique ou transmettre par tout autre moyen tout contenu du Site
              à destination de personnes n’ayant pas l’âge légal pour consommer
              et/ou acheter de l’alcool dans leur lieu de résidence ou résidant dans
              un lieu restreignant ou interdisant la publicité pour des boissons
              alcooliques.  "
            />
          </ListItem>
        </List>
        <Typography className={classes.body1}>
          Chaque utilisateur s’engage à respecter toutes les lois, règles et procédures applicables
          relatives au comportement des utilisateurs en ligne et à la transmission des données
          techniques.
        </Typography>
        <Typography className={classes.body1}>
          {' '}
          Le cas échéant, la Société peut mettre fin à tout moment au droit d’accès au Site d’un
          utilisateur si celui-ci ne respecte pas les obligations qui lui incombent en vertu des
          Conditions Générales d’Utilisation et/ou de tout autre document, sans préjudice du droit
          de la Société de demander des dommages-intérêts.
        </Typography>
        <Typography className={classes.titre3}>
          1.4 CONTENU PUBLIÉ PAR LES UTILISATEURS, LE CAS ÉCHÉANT
        </Typography>
        <Typography className={classes.body1}>
          Les utilisateurs du Site sont seuls responsables des contenus qu’ils postent sur le Site
          et des conséquences de leur diffusion, de leur publication, de leur transfert ou de leur
          mise à disposition. La Société ne cautionne aucun contenu, opinion, recommandation ou avis
          exprimé par les utilisateurs sur le Site, et décline toute responsabilité relative au
          contenu posté sur le Site dans les limites de la réglementation applicable. Toutefois, la
          Société se réserve le droit (sans y être obligé) de décider si le contenu posté par les
          utilisateurs respecte les exigences spécifiées dans les Conditions Générales d’Utilisation
          et peut supprimer tout contenu qui violerait ces Conditions Générales d’Utilisation et/ou
          interdire l'accès d'un utilisateur au Site en raison de la soumission d'un tel contenu, à
          tout moment, sans préavis et à son entière discrétion.
        </Typography>
        <Typography className={classes.body1}>
          Vous acceptez que la Société puisse librement utiliser, sans aucune restriction et à titre
          gratuit, tout contenu posté sur le Site non seulement pour sa diffusion sur le Site mais
          également pour sa diffusion et reproduction sur tout autre support quel qu’il soit pour la
          promotion et publicité de la Société, ses produits et ses services, pour le monde entier.
        </Typography>
        <Typography className={classes.titre3}>1.5 SIGNALER UN CONTENU INAPPROPRIÉ</Typography>
        <Typography className={classes.body1}>
          Les utilisateurs peuvent signaler à la Société tout contenu inapproprié en envoyant un
          e-mail à l'adresse suivante : Nous contacter.
        </Typography>
        <Typography className={classes.titre3}>2. PROTECTION DU CONTENU DU SITE</Typography>
        <Typography className={classes.body1}>
          Le Site et chacun des éléments qui le composent (tels que textes, arborescences,
          logiciels, animations, photographies, illustrations, images, vidéos, schémas, bandes
          sonores, textes, logos, marques, dessins et modèles), y compris les éléments logiciels
          nécessaires au fonctionnement du Site, bases de données et newsletter (ci-après le
          "Contenu") peuvent contenir des informations confidentielles et des données protégées par
          le droit de la propriété intellectuelle ou toute autre loi applicable.
        </Typography>
        <Typography className={classes.body1}>
          Ainsi, sauf mention contraire sur le Site, les droits de propriété intellectuelle sur le
          Contenu sont la propriété exclusive de la Société, celle-ci ne concédant à l’utilisateur
          aucune licence, ni aucun autre droit que celui de consulter le Site. La reproduction de
          tout ou partie du Contenu est autorisée uniquement aux fins d'information pour un usage
          personnel et privé, toute reproduction et toute utilisation de copies du Contenu réalisées
          à d'autres fins, de quelque manière que ce soit et sous quelque forme que ce soit, étant
          expressément interdites. Il est également interdit à l’utilisateur de copier, modifier,
          créer une œuvre dérivée, assembler, décompiler, céder, sous-licencier ou transférer de
          quelque manière que se soit tout droit afférent au Contenu ou au Site.
        </Typography>
        <Typography className={classes.titre3}>3. DONNÉES PERSONNELLES</Typography>
        <Typography className={classes.body1}>
          La Société veille à la protection des données personnelles transmises par les utilisateurs
          du Site. La Société invite les utilisateurs du Site à consulter la Charte données
          personnelles & cookies qui précise les dispositions mises en place pour garantir le
          traitement des données.
        </Typography>
        <Typography className={classes.body1}>
          La collecte, le traitement, l’usage, la transmission, la conservation et la protection de
          vos données personnelles sont régies par la Charte données personnelles & cookies.
        </Typography>
        <Typography className={classes.titre3}>4. RESPONSABILITÉ</Typography>
        <Typography className={classes.body1}>
          La Société s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour
          des informations diffusées sur le Site. Toutefois, la Société ne peut garantir
          l'exactitude, la précision ou l'exhaustivité des informations mises à la disposition des
          utilisateurs sur le Site. La Société permet l’accès au Site à titre gratuit et décline
          toute responsabilité :
        </Typography>
        <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="linterruption"
              primary="Pour toute interruption du
              Site "
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="survenance de bogues"
              primary="En cas de survenance de bogues, de virus informatiques,
              d’erreurs d’affichage ou de téléchargement"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="inexactitude"
              primary="Pour toute inexactitude
              ou omission portant sur le Contenu disponible sur le Site"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="intrusion"
              primary="Pour tous
              dommages résultant d'une intrusion frauduleuse d'un tiers  "
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HorizontalRuleIcon htmlColor="#ccbf90" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              id="dommages directs"
              primary="Plus
              généralement pour tous les dommages directs et indirects, quelles
              qu'en soient les causes ou conséquences, pouvant survenir à la suite
              de l'accès au Site et résultant d’une quelconque information provenant
              directement ou indirectement du Site. "
            />
          </ListItem>
        </List>

        <Typography className={classes.titre3}>
          5. DROIT APPLICABLE ET JURIDICTION COMPETENTE
        </Typography>
        <Typography className={classes.body1}>
          {' '}
          Les Conditions Générales d’Utilisation, ainsi que la Charte données personnelles & cookies
          auxquelles il est fait référence sont régies par le droit français.
        </Typography>
        <Typography sx={{ marginBottom: 10 }} className={classes.body1}>
          Sauf disposition légale impérative contraire, tout différend concernant le Contenu et
          l’utilisation du Site relève de la compétence exclusive du tribunal compétent du ressort
          de la Cour d’Appel de Paris, y compris en cas d’appel en garantie, de pluralité de
          défendeurs ou de procédure en référé ou sur requête.
        </Typography>
      </Grid>
    </Main>
  )
}
export default ConditionsGeneral
