*(English version below)*

# ![Better RK forum logo](https://i14.servimg.com/u/f14/11/97/33/52/icon4810.png) Better-RK-forum 
v0.9.0

Cette extension améliore les forums officiels du jeu ["Renaissance Kingdoms"](https://www.renaissancekingdoms.com). 

Elle permet d'ajouter pour les deux forums officiels :

* des filtres à l'index du forum.
* des filtres aux pages de recherches de nouveaux messages.
* un filtre de comptes ignorés aux pages de lecture des sujets.
* l'affichage d'icônes de nouveaux messages à l'index du forum.
* des boutons permettant d'utiliser des balises supplémentaires pour la rédaction de messages (spoiler, char, center,...) (inspiré d'un script de jdOrandin)

Chaque fonctionnalité peut être activée ou désactivée individuellement depuis les options de l'extension.

*Nouveauté v0.9 :* Chaque filtre (liste blanche, noire, d'ignoré) peut être appliqué par défaut au chargement de la page si l'utilisateur le souhaite (paramétrable dans les options de l'extension).

Tous les réglages sont sauvegardés *localement* sur le navigateur (autrement dit, si vous changez de navigateur ou d'ordinateur, il faudra refaire le paramétrage) et seront appliqués une fois la page rechargée. 

*__Note__ : cette extension n'est pas une extension officielle et n'est pas gérée par Celsius Online, mais par des joueurs de Renaissance Kingdoms. 
Celsius a confirmé [sur Discord](https://discord.com/channels/600977495411392512/876408245768564736/877125248414281749) qu'elle ne leur posait pas de problèmes.*


## Compatibilité
Cette extension est disponible pour [Firefox](https://addons.mozilla.org/fr/firefox/addon/better-rk-forum/) et [Chrome](https://chrome.google.com/webstore/detail/better-rk-forum/ijncinfepcgeaddehnlbkkggfjmfjnfn/) (elle devrait aussi fonctionner avec Edge et Opera, puisqu'ils acceptent les extensions Chrome). 
Elle fonctionne également sur téléphone à condition d'utiliser une application de navigation qui accepte les extensions (Firefox Nightly, Brave, Kiwi browser...).


## Utilisation
### Première utilisation
Après une première installation (ou certaines mises à jour), les fonctionnalités de l'extension ne sont pas activées par défaut. Pour les activer, il est nécessaire d'aller dans les options de l'extension, de choisir les fonctionnalités à activer, puis de sauvegarder les options (*même si vous ne faites pas de changement par rapport à la proposition par défaut !*).

Après ça, les fonctionnalités choisies seront activées au prochain rechargement d'une page concernée.

### Liste blanche et liste noire
L'extension rajoute quatre boutons lors de la visite de l'index ou de l'une des pages de nouveaux messages ("Voir les nouveaux messages depuis votre dernière visite", "Voir ses messages", "Voir les messages sans réponses") :

* "Filtrer liste blanche" : n'affiche que les catégories de la liste blanche.
* "Filtrer liste noire" : retire de l'affichage les catégories de la liste noire.
* "Annuler filtres" : retire les filtres pour rétablir l'affichage initial. 
* "Afficher/cacher réglages" : permet d'afficher ou de cacher les réglages. 

Pour définir les listes blanches et noires, il faut remplir les zones de texte correspondantes de la partie réglages avec la liste des catégories que l'on souhaite afficher ou exclure. 
Les noms des différentes catégories doivent être séparés par des points-virgules. 
Par exemple : 
> Early Access ; Babel Tower II ; International Justice ; OOC Justice Rules and Justice Records ; International KAP ;

Ces listes sont *distinctes* entre les deux forums.

### Liste d'ignorés
L'extension ajoute trois boutons lors de la lecture d'un sujet :

* "Filtrer ignorés" : remplace les messages des comptes ignorés par un texte neutre.
* "Annuler filtres" : retire les filtres pour rétablir l'affichage initial. 
* "Afficher/cacher réglages" : permet d'afficher ou de cacher les réglages. 

Pour définir la liste d'ignorés, il faut remplir la zone de texte correspondante de la partie réglages avec la liste des comptes que l'on souhaite ignorer. 
Les noms des différents comptes doivent être séparés par des points-virgules. 

Cette liste est *commune* aux deux forums.

### Icônes de nouveaux messages
Sur l'index du forum, cette fonctionnalité change l'icône des catégories pour signaler que de nouveaux messages ont été postés.

La "nouveauté" des messages est basée sur la date de dernière visite indiquée sur l'index du forum et la date des derniers messages des catégories. 
Elle ne dépend pas de si ces messages ont été lus ou non.

### Balises pour la rédaction
Inspiré par un script de jdOrandin, cette fonctionnalité ajoute aux fenêtres d'éditions de messages (réponse à un sujet ou messages privées) différents boutons permettant d'utiliser les balises :

* center (alignement centré), right (alignement à droite), 
* spoiler, 
* sup (exposant), sub (indice), 
* char (fiche de personnage), 
* hr (barre horizontale pleine), hr-dashed (barre horizontale en tirets), hr-dotted (barre horizontale en pointillés).


## To-do list
<details>
  <summary>Cliquez pour afficher la to-do list</summary>
 
  * <strike>amélioration du filtrage de l'index (actuellement, mettre un sous-forum en liste noire exclu aussi son forum racine).</strike> -> v0.5
  * <strike>ajout de filtres pour une "liste d'ignorés" qui masquerait les messages de personnes que vous ne souhaitez pas lire.</strike> -> v0.5
  * <strike>changement d'icône sur l'index lorsqu'il y a des nouveaux messages dans le forum associé. </strike>-> v0.6
  * <strike>ajout de boutons aux fenêtres de rédactions des messages pour accéder plus facilement aux balises "strike", "center", "spoiler", "char", etc.</strike> -> v0.7
  * <strike>ajout d'options à l'extension pour choisir quelles fonctionnalités activer ou non.</strike> -> v0.8
  * <strike>ajout d'options à l'extension pour que les filtres s'appliquent par défaut.</strike> -> v0.9
  * <strike>masquer les catégories vides après application des filtres.</strike> -> v0.9
  * <strike>version mobile ?</strike> -> impossible avec Chrome ou Firefox pour Android, mais possible avec d'autres navigateurs (Kiwi browser, firefox nightly,...)
  * ajout d'un moyen de voir rapidement les messages d'une liste de joueurs ?
  * séparation des listes selon les personnages ?
  * synchronisation des paramètres entre différentes machines ?
 
</details>
Si vous avez des suggestions de fonctionnalités, n'hésitez pas à m'en faire part. 


## Notes de patchs
<details>
  <summary>Cliquez pour afficher les notes de patchs</summary>
 
  * __Version 0.9.0 :__ 
    * *Nouvelle fonctionnalité :* Chaque filtre (liste blanche, noire, d'ignoré) peut être appliqué par défaut au chargement de la page si l'utilisateur le souhaite (paramétrable dans les options de l'extension).
    * *Modification :* Les noms des "catégories" seront désormais cachés également lorsque tous les forums à l'intérieur sont cachés
    * *Modification :* Le message apparaissant à la place de l'original lorsqu'on filtre la liste d'ignoré est désormais en rouge pour mieux le distinguer.

  * __Version 0.8.0 :__ *Nouvelle fonctionnalité :* ajout d'un menu dans les options du module, permettant d'activer/désactiver chaque fonctionnalité séparément
  * __Version 0.7.0 :__ *Nouvelle fonctionnalité :* des boutons permettant d'utiliser des balises supplémentaires pour la rédaction de messages (spoiler, char, center,...) (inspiré d'un script de jdOrandin)
  * __Version 0.6.0 :__ *Nouvelle fonctionnalité :* ajout d'icônes signalant les nouveaux messages sur la page d'index.
La "nouveauté" des messages est basée sur la date de dernière visite indiquée sur l'index du forum et la date des derniers messages des catégories. Elle ne dépend pas de si ces messages ont été lus ou non.
  * __Version 0.5.1 :__ correction du masquage incomplets des messages d'auteurs ignorés lorsque certaines balises étaient utilisées. 
  * __Version 0.5 :__ 
    * *Nouvelle fonctionnalité :* ajout dans l'affichage des sujets de la possibilité de masquer (et rétablir) les messages d'une liste de comptes ignorés. Vous verrez que la personne a posté mais son message sera remplacé.
Le fonctionnement est similaire à celui des listes noires/blanches (il faut renseigner la liste et appuyer sur le bouton filtrer). Contrairement à celles-ci qui sont séparées pour chaque forum, la liste de compte ignorés est normalement commune aux deux.
    * *Modification de comportement :* changement dans la zone de recherche des listes blanches/noires. 
Précédemment, sur la page d'index les termes étaient cherchés y compris dans la description et les noms des sous-forums, ce qui pouvait créer des surprises. Par exemple si vous aviez mis "annonces" en liste, ça trouvait le forum des annonces admins mais aussi la section "Foire des RR" qui a "annonces" dans sa description. Ou encore, si vous aviez mis une halle en liste noire, ça cachait y compris la gargote dans l'index.
Désormais ce seront exclusivement les noms de catégories qui seront examinés et normalement ces cas ne se produiront plus.
    * *Correctif :* amélioration de la gestion des listes noires/blanches en coulisse pour limiter les erreurs. 
Par exemple, terminer une liste par un point-virgule faisait dysfonctionner les filtres, maintenant ça ne devrait plus le faire.
 
</details>


## Crédits
L'image de nouveaux messages sur l'index est modifiée à partir de [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Ar_Icon_Article.svg).

Les images utilisées pour les boutons dans l'éditeur de messages sont modifiées à partir d'icones de [Fontawesome](https://fontawesome.com/license/free), à l'exception de l'image de fiche de personnage qui est directement issue de ["Renaissance Kingdoms"](https://www.renaissancekingdoms.com).


---
# ![Better RK forum logo](https://i14.servimg.com/u/f14/11/97/33/52/icon4810.png) Better-RK-forum
v0.9.0

This extension improves the official forums of the game ["Renaissance Kingdoms"](https://www.renaissancekingdoms.com).

It adds for both official forums:

* filters to the forum index.
* filters to the search pages for new posts.
* a filter of ignored accounts to the reading pages of the topics.
* display a "new posts" icon on the forum index.
* buttons to use additional tags in posts edition (spoiler, char, center,...) (inspired by a script from jdOrandin)

Each feature can be enabled or disabled individually from the extension options.

*New in v0.9 :* Each filter (whitelist, blacklist, ignore) can be applied by default at page load if the user wishes (configurable in the extension options).

All settings are saved *locally* on the browser (in other words, if you change browser or computer, you will have to redo the settings) and will be applied once the page is reloaded. 

*Note: This is not an official expansion and is not managed by Celsius Online, but by Renaissance Kingdoms players. 
Celsius has confirmed [on Discord](https://discord.com/channels/600977495411392512/876408245768564736/877125248414281749) that they have no problems with it.


## Compatibility
This extension is available for [Firefox](https://addons.mozilla.org/fr/firefox/addon/better-rk-forum/) and [Chrome](https://chrome.google.com/webstore/detail/better-rk-forum/ijncinfepcgeaddehnlbkkggfjmfjnfn/) (it should also work with Edge and Opera, since they accept Chrome extensions). 
It also works on phones if you use a browser application that accepts extensions (Firefox Nightly, Brave, Kiwi browser...).


## Usage
### First use
After a first installation (or some updates), the extension features are not activated by default. To activate them, it is necessary to go to the extension options, choose the features to activate, then save the options (*even if you don't make any change from the default !*).

After that, the chosen features will be activated the next time you reload a forum page.

### White list and black list
The extension adds four buttons when visiting the index or any of the new posts pages ("See new posts since your last visit", "See my posts", "See unanswered posts"):

* "Filtrer liste blanche": displays only whitelist categories.
* "Filtrer liste noire": remove from the display the categories of the black list.
* "Annuler filtres": removes the filters to restore the initial list. 
* "Afficher/cacher réglages": allows you to show or hide the settings. 

To define the white and black lists, you must fill in the corresponding text boxes in the settings section with the list of categories you wish to display or exclude. 
The names of the different categories must be separated by semicolons. 
For example: 
> Early Access; Babel Tower II; International Justice; OOC Justice Rules and Justice Records; International KAP ;

These lists are *distinct* between the two forums.

### Ignore list
The extension adds three buttons when reading a topic:

* "Filtrer ignorés": replaces posts from ignored accounts with neutral text.
* "Annuler filtres": removes filters to restore the original display. 
* "Afficher/cacher réglages" : allows to show or hide the settings. 

To define the ignore list, you must fill in the corresponding text box in the settings section with the list of accounts you wish to ignore. 
The names of the different accounts must be separated by semicolons. 

The list is *common* to both forums.

### New posts icons
On the forum index, this feature changes categories' icon when there are new posts in it.

"New posts" are defined based on the last visit date displayed on the forum index and on the last posts date displayed for each category. 
It does not depend on whether these messages have been read or not.

### Tags for the edition
Inspired by a script from jdOrandin, this feature adds buttons to the editing pages (post an awnser to a topic or a private message). 
These buttons allow to use the following tags: 

  * center (align center), right (align right), 
  * spoiler, 
  * sup (superscript), sub (subscript), 
  * char (character sheet), 
  * hr (horizontal rule), hr-dashed (horizontal dashed rule), hr-dotted (horizontal dotted rule).


## To-do list
<details>
  <summary>Click to display the to-do list</summary>
 
  * <strike>improved index filtering (currently, blacklisting a subforum also excludes its root forum).</strike> -> v0.5
  * <strike>adding filters for an "ignore list" that would hide posts from people you don't want to read.</strike> -> v0.5
  * <strike>changing the icon on the index when there are new posts in the associated forum. </strike>-> v0.6
  * <strike>adding buttons to the post editing windows for easier access to "strike", "center", "spoiler", "char", etc.</strike> -> v0.7
  * <strike>adding options to the extension to choose which features to enable or not.</strike> -> v0.8
  * <strike>adding options to the extension to make filters apply by default.</strike> -> v0.9
  * <strike>hide empty categories after applying filters.</strike> -> v0.9
  * <strike>mobile version?</strike> -> impossible with Chrome or Firefox for Android, but possible with other browsers (Kiwi browser, firefox nightly,...)
  * adding a way to quickly see the messages of a list of players?
  * separation of the lists according to the characters?
  * synchronization of settings between different devices?
 
</details>
If you have any suggestions for features, please let me know. 


## Patch Notes
<details>
  <summary>Click to view patch notes</summary>
 
  * __Version 0.9.0 :__ 
    * *New feature :* Each filter (whitelist, blacklist, ignore) can be applied by default on page load if the user wants (configurable in the extension options).
    * *Change:* The names of the "categories" will now also be hidden when all the forums inside are hidden
    * *Change:* The message that appears instead of the original when filtering the ignore list is now in red to distinguish it better.

  * __Version 0.8.0 :__ *New feature :* added a menu in the module options, allowing to activate/deactivate each feature separately
  * __Version 0.7.0 :__ *New feature :* buttons to use additional tags for writing messages (spoiler, char, center,...) (inspired by a script from jdOrandin)
  * __Version 0.6.0 :__ *New feature :* added icons to indicate new posts on the index page.
The "newness" of posts is based on the date of last visit indicated on the forum index and the date of the last posts of the categories. It does not depend on whether these posts have been read or not.
  * __Version 0.5.1:__ correction of incomplete masking of ignored authors' posts when some tags were used. 
  * __Version 0.5 :__ 
    * *New feature:* added in the topic display the possibility to hide (and restore) the posts of a list of ignored accounts. You will see that the person has posted but their message will be replaced.
The operation is similar to the black/white lists (you have to fill in the list and press the filter button). Unlike the black/white lists which are separate for each forum, the ignore list is normally common to both.
    * * Behavioral change:* change in the search area of the white/black lists. 
Previously, on the index page the terms were searched including the description and the names of the subforums, which could create surprises. For example, if you had put "ads" in the list, it would find the admins ads forum but also the "RR Fair" section which has "ads" in its description. Or if you put a hall in the black list, it would hide even the gargote in the index.
From now on only category names will be examined and normally these cases will not occur anymore.
    * *Correction:* improvement of the management of black/white lists behind the scenes to limit errors. 
For example, ending a list with a semicolon was causing filters to malfunction, now it shouldn't.
 
</details>


## Credits
The image of new posts on the index is modified from [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Ar_Icon_Article.svg).

The images used for the buttons in the message editor are modified from icons by [Fontawesome](https://fontawesome.com/license/free), except for the character sheet image which is directly from ["Renaissance Kingdoms"](https://www.renaissancekingdoms.com).
