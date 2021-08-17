// Auteur original : jdOrandin
// Modifications par jdWalan (07/2021) : changement des adresses, remplacement des ""@include" par ""@match", remplacement des "var" par "let"

let RR_OrandinJS= {
    TagSelector:".helpline",
    HelpLineSelector:".helpline",
    TextAreaSelector:"textarea.post",
    tags:[ {
        name: "strike", help: "Texte barré: [strike]texte[/strike]", type: "image", src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJRJREFUeNpi/P//PwMlgImBQjDwBrCgC1y4cOH/nj17sCp2cXFhMDAwYMTrgu3btzP8/v0brBhEI7NBcgS98OvXL4bKykpGkE0gNgiD2CAxEBsdMOKLRqAmsGR7ezsjLjUYBkRGRuJNGMuXL2ck2gXp6elgyZkzZzISHQvI4MePHwSjEacL0L2C7nSivDBC8gJAgAEAXzRNTTA6fBkAAAAASUVORK5CYII="
    },
    {
        name: "center", help: "Texte centré: [center]texte à centrer[/center]", type: "image", src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHBJREFUeNpi/P//PwMlgImBQkCxASwwxqJFi0jyS1xcHCOIZqQ0DFiQOXPmzCHKtJSUFEYYm3oumDRpEkkm5eXl0SAMYKC9vR2rqZWVlYzoYtRzQW1tLUkmNTc30yAMSktLiTKtu7ubeumA4swEEGAAVJAtETmH0P0AAAAASUVORK5CYII="
    },
    {
        name: "right", help: "Texté aligné à droite: [right]texte à aligner[/right]", type: "image", src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAGtJREFUeNpi/P//PwMlgImBQkCxASzInEWLFhHtn7i4OEYQzUhpGLBgE5wzZw5BU1NSUmjggkmTJhFtWl5eHg3DAATa29vxmlxZWUllF9TW1pJkUnNzM43CoLS0lCgTu7u7qeMCijMTQIABAPdtLRGJ1m+2AAAAAElFTkSuQmCC"
    },
    {
        name: "spoiler", help: "Texte à cacher: [spoiler]Texte caché[/spoiler]", type: "button", text: "Spoiler"
    },
    {
        name: "sup", help: "Texte à mettre en exposant: [sub]Exposant[/sub]", type: "image", src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYJDQY0osJ+EAAAAJ9JREFUOMvtULENAyEMtKNfyDvQsAEVK9AiKnq2oGIDGnZgHJAbUuXFK//6T6KkylW2z3cnG+DXCCGMEML42Mh7/76JMWYV40zUWkcpZVckhAAiQq31Ko4x4jIv5ZwBAEBK+VQ/+hjjJvQ2N8wMzjkkImRmYGYgInTOITO/dqe1dlhrTx+1HBGttUtB3zPovV8ywL2hUmpze0oJ4Y9D3AHqy0KPFDjHLAAAAABJRU5ErkJggg=="
    },
    {
        name: "sub", help: "Texte à mettre en indice: [sup]Indice[/sup]", type: "image", src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALBJREFUeNpi/P//PwMlgImBQjDwBrAgcy5cuPB/z549WBW6uLgwGBgYMOJ1wfbt2xl+//4NVgyikdkgOYJe+PXrF0NlZSUjyCYQG4RBbJAYiI0NMOKKRqAmsER7ezsj0WGADL5//056IFLVgB8/fqDwe3p6wF4qKSlhJBgGkZGRKILLly+Ha2psbPxfX1+PMARkALE4Pz//P7oYI7GZKT4+Hq5w4cKFjASjkW55ASDAANTXgzzSSVwAAAAAAElFTkSuQmCC"
    },
    {
        name: "char", help: "Insérer la fiche d'un joueur: [char]Nom IG[/char]", type: "image", src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAWCAYAAAAinad/AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNXG14zYAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDEvMTcvMTOYD50mAAADiElEQVQ4jc2Vy09UdxTHP3Pv79474ADDMJ0hvMTKQ3k4ojwqKqbRpjTYNG1YdNeEBX2wsOGPaCJNG1k0cUPSEmtiQ1M7NjFUaoaqUGop0aIUDC0FVMDMjDAwjzv3znSBQEeJKxc9y/PL+Zzz/Z6T/CzJZJIXFdILIwECoPM1T1Jkp5MhFAD8pkz3Nz4aD1UjC5lYKEQ0HKPKCTmq/VmIkPj8yi2L2Eh4anfjcGYSCq3x7eAMbrcDe3YmIyPjBIMhysuLCNhclO3N4yWbiqKaqIqCy53NbwPjW5MBCEkgFEH/4D0ePIrg8ZRxyfsZuh7nl5Fxzp/vx+cbZeDqKAUFLuoOlNJQXUieIrYm/O+4ihD4RibQsuwcO/YqAKqq0HS0hqajNQAsLPi5cOEK585dpu+7a1z9+uNUmGEksKYJlpb8AExOztLScoT6hg7eefsIJ0++QlXVLgByc3M4depdlpdXMU0TVd3aobRhIEBWZhp7KsuQJAs1+8u4cb2bkpJ8enou8+FH3Vy8eINgMASAb/B39pTmowqBVVW3YIaRQCgyOQ47NptGQYELVVVQFEFraxNdXe10dLzFP7OLnD37AwDT0/OUFLuwSNt4ZpVlrJqCHjcpL9+ZsnpFEVRVFlNVWQzA4mIAv3+ZfSVuNMWyvUyAe3895HCjB4D6hg6+/KqfcDiaAvf5RtH1OK4M0DSRCjOMBJoiuHX7b+5OzND8xiEArl87Q8Af4v0PztDb+yMLCwEABn66SUNdBXrcQIinYBsxNh1Akizs95QB62fR2dnKp13tGEYCr3cYgJu/3qEo34mqCISQSahyKiwWN3gQiOB02pFlKUVibq6DtrZm2ttbAJi/v0Rejg0zue6XpJupsNWojj+4RsnugudKnJqaJRQKs3eXHSEUotHY9jLvP3zE8RP1z5Xo9f5MZuYO3I4daGk2YjFjs37TvWjE4M7dGR73fM/Q0G3q6io4cbyO2toK2tqaNwuGhv+g/mA5qiJYW11BTmrPwoyEwRefvMf0XJCpmSUueQc5fbqX9HQNl8tBaWkhhxs9jI1N8ubrB5FkGSMeR49LRHX9KZhpkpul4Uy3c6A4g3A0n0ikmmVDsPg4wvzCMn19A8zNLbLTncHKSgirVSP6xPwU2J/D05hWGTm6/riaWO8We9L15aRCYZGNpqJ9zI5NEJBUktb1k9CDYQAs/9s/4F+GKFp2veOTuQAAAABJRU5ErkJggg=="
    }    
    ],
    OrphanTags:[ {
        name:"hr",
        help:"Barre pleine de séparation: [ħr] ou [hr={Nombre compris entre 1 et 99}]",
        type: "image", src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAIBJREFUeNpi/P//PwMlgImBQjDwBrDAGIsWLSIpMOLi4hhBNCOlgQh3wYQJE0gyqaCggIouaFkdxfD1nDxBk7iNHjIi82tClyG8gC5JajROA+L/JOJpcC+8ev4iM9wllCSbV+5ZnQmkssAGPLrzYHr3ne5MEl0/nSqxMPB5ASDAABxrNniWMCq/AAAAAElFTkSuQmCC"
    },
    {
        name:"hr-dashed",
        help:"Barre non pleine de séparation: [hr-dashed] ou [hr-dashed={Nombre compris entre 1 et 99}]",
        type: "button", text: "hr-dashed"
    },
    {
        name:"hr-dotted",
        help:"Barre en pointillés de séparation : [hr-dotted] ou [hr-dotted={Nombre compris entre 1 et 99}]",
        type: "button", text: "hr-dotted"
    }
    ],
    init:function() {
        let e=document.createElement("tr"),
        A=document.querySelector(this.TagSelector);
        A=A.parentNode.parentNode.parentNode.previousElementSibling,
        A.parentNode.insertBefore(e, A);
        for(let t in this.tags) {
          this.createInput(this.tags[t], e);
        }
        for(let t in this.OrphanTags) {
          this.createInput(this.OrphanTags[t], e);
        }
    },
    createInput:function(e, A) {
        let t=document.createElement("td");
        t.style="text-align: center;";
        let n=document.createElement("span");
        n.className="genmed";
        let a=document.createElement("input");
        switch(a.className="button", a.type=e.type, e.type) {
            case"image": a.src=e.src, a.alt=e.name, a.style="padding: 0 7px; border-style: outset; border-width: 2px;";
            break;
            case"button": a.value=e.text;
            break;
            default: a.value=e.name;
        }
        a.onclick=function() {
            return RR_OrandinJS.insertTag(e),
            !1;
        },
        a.onmouseover=function() {
            RR_OrandinJS.TagHelper(e);
        },
        n.appendChild(a),
        t.appendChild(n),
        A.appendChild(t);
    },
    insertTag:function(e) {
        let A="",
        t="",
        n=document.querySelector(this.TextAreaSelector),
        a=n.scrollTop,
        i, l, s, r;
        if(n.focus(), window.ActiveXObject) {
          r=document.selection.createRange(), 
          i=r.text;
        }
        else {
          l=n.value.substring(0, n.selectionStart), 
          i=n.value.substring(n.selectionStart, n.selectionEnd), 
          s=n.value.substring(n.selectionEnd);
        }
        if(this.OrphanTags.indexOf(e)>=0) {
          if(confirm("Voulez-vous définir la largueur ?")) {
            for(var c="Largeur du trait de séparation ? \n (De 1 à 99)", o=parseInt(prompt(c));
                0>o&&o>99;) {
              console.log(o),
                alert("Attention! Vous devez renseigner un nombre compris entre 1 à 99.");
              o=parseInt(prompt(c));
            }
            A="["+e.name+"="+o+"]";
          }
          else {
            A="["+e.name+"]";
          }
        }
        else {
          A="["+e.name+"]",
            t="[/"+e.name+"]";
        }
        window.ActiveXObject?(r.text=A+i+t, r.moveStart("character", -t.length-i.length), r.moveEnd("character", -t.length), r.select()):(n.value=l+A+i+t+s, n.focus(), n.setSelectionRange(l.length+A.length, l.length+A.length+i.length)),
        n.scrollTop=a;
    },
    TagHelper:function(e) {
        let A=document.querySelector(this.HelpLineSelector);
        A.value=e.help;
    }
}

;
RR_OrandinJS.init();