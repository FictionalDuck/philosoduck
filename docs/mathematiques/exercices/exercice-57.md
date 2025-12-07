# Exercice 57
- *[Retour au programme](../index.md)*
- *[Aller aux chapitres](../chapitres/chapitres.md)*
- *[Aller aux exercices](../exercices/exercices.md)*
## Liens Manuel
- [Source (lelivrescolaire.fr)](https://www.lelivrescolaire.fr/page/16648158)
- [Ch. 6 - Continuité](https://www.lelivrescolaire.fr/page/14577037)
- [Ch. 9 - Fonctions trigonométriques](https://www.lelivrescolaire.fr/page/15903289)

***

## Exercice
Soit $f$ la fonction définie pour tout $x \in [-1;5]$ par :
$$
f(x) = \frac{e^{-x}}{2}(\cos(x)+\sin(x)-2x+1)
$$

#### 1. Déterminer l'expression $f'(x)$ pour $x \in [-1;5]$.
#### 2. Soit $g$ la fonction définie pour tout $x \in [-1;5]$ par :

   $$
   g(x) = 2x-3 -2\sin(x)
   $$

   ##### A. Démontrer qu'il existe un unique réel $\alpha in [2,2;2,3]$ tel que $g(\alpha) = 0$.

   ##### B. En déduire le tableau de variations de $f$ sur $[-1; 5]$.

***
<details>
<summary>Voir la correction...</summary>
## Correction
Soit $f$ la fonction définie pour tout $x \in [-1;5]$ par :
$$
f(x) = \frac{e^{-x}}{2}(\cos(x)+\sin(x)-2x+1)
$$

### 1. Déterminer l'expression $f'(x)$ pour $x \in [-1;5]$.

$f(x)$ est de la forme $u \times v$, donc

$f'(x)$ est de la forme $u'v + v'u$

$$
\begin{align}
u = \dfrac{e^{-x}}{2} && u' =-\dfrac{e^{-x}}{2} \\
v = \cos x + \sin x -2x+1 && v'=-\sin x + \cos x -2
\end{align}
$$

$\left( \frac{1}{2} \times e^{-x} \right)'=\frac{1}{2} \times -e^{-x}$

$\left( \dfrac{e^{-x}}{2} \right)'$ est de la forme: $\left( \dfrac{u}{v} \right)'$

Or, $\left( \dfrac{u}{v} \right)'=\dfrac{u'v-v'u}{v^{2}}$

Dans ce cas,
$$
\begin{align}
u = e^{-x} && u'=-e^{-x} \\
v = 2 && v'=0
\end{align}
$$

Donc

$\left(\dfrac{e^{-x}}{2}\right)'=\dfrac{-e^{-x}\times 2 - 0 \times e^{-x}}{2^{2}}$

$\left(\dfrac{e^{-x}}{2}\right)'=\dfrac{-2e^{-x}}{4}=\dfrac{-e^{-x}}{2}=-\dfrac{e^{-x}}{2}$

On obtient donc:

$f'(x)=-\frac{e^{-x}}{2} \times (\cos x + \sin x -2x + 1) + \frac{e^{-x}}{2} \times (-\sin x + \cos x -2)$

$f'(x)=[-1 \times (\cos x + \sin x -2x +1)+(-\sin x + \cos x -2)]\frac{e^{-x}}{2}$

$f'(x)=[-\cos x -\sin x +2x -1-\sin x + \cos x -2]\frac{e^{-x}}{2}$

$f'(x)=(-2\sin x +2x -3)\frac{e^{-x}}{2}$  
### 2. Soit $g$ la fonction définie pour tout $x \in [-1;5]$ par :
$$
g(x) = 2x-3 -2\sin(x)
$$

#### A) Démontrer qu'il existe un unique réel $\alpha \in [2,2;2,3]$ tel que $g(\alpha) = 0$.

On va donc dériver la fonction $g(x)$ pour obtenir le sens de variation de $g(x)$:

$g'(x) =2-2\cos x$

On fait ensuite une inéquation, pour déterminer le signe de $g'(x)$:

$2-2 \cos x \geq 0$

$-2 \cos x \geq -2$

$2 \cos x \leq 2$

$\cos x \leq \frac{2}{2}$

$\cos x \leq 1$

$\cos x \leq \cos 0$

Donc, $x \leq 0+ 2k\pi, k \in \mathbb{N}$

<details>
<summary>Une seule solution car...</summary>


$g'(0) =2-2\cos 0 = 2-2 = 0$

$g'(2\pi \approx 6,28) =2-2\cos 2\pi =2-2=0$

</details>

Alors, sur $[-1;5]$, $k = 0$, donc $S = \{0\}$

On peut donc également déduire les variation de $g(x)$

$g(0)=2\times 0-3 -2\sin(0)=-3-2\sin 0 = -3$

$g'(x) =2-2\cos x$

$-1 \leq \cos x \leq 1$

$-2 \leq 2 \cos x \leq 2$

$2 \geq -2 \cos x \geq -2$

$-2 \leq -2 \cos x \leq 2$

$0 \leq 2-2 \cos x \leq 4$

$0 \leq g'(x) \leq 4$

$g'(x)$ est toujours positif, donc $g(x)$ est strictement croissant.
On peut conclure que $g(x)$ est continue sur $[-1;5]$ et strictement croissant.

Or, l'intervalle $[2,2;2,3]$ est inclus dans l'intervalle $[-1;5]$, donc $g(x)$ est continue sur $[2,2;2,3]$ et strictement croissant.

L'intervalle image est:

$g(2,2) \approx -0.2169928076 < 0$

$g(2,3) \approx 0.1085895756 > 0$

$0$ est inclus dans l'intervalle image.

Donc, d'après le théorème des valeurs intermédiaires, $g(x) = 0$ admet une solution notée $\alpha$, compris dans l'intervalle $[2,2;2,3]$.

#### B) En déduire le tableau de variations de $f$ sur $[-1; 5]$.

Pour déduire le tableau de variation de $f$, sur $[-1; 5]$, on utilise le signe de la dérivée.

Or, $f'(x) = (-2\sin x +2x -3)\frac{e^{-x}}{2} = g(x)\frac{e^{-x}}{2}$

Et, $\forall x \in \mathbb{R}$, $e^{-x} > 0$, donc $\frac{e^{-x}}{2} > 0$

On déduit donc:

| $x$  | $-1$  | $\alpha$ | $5$ |
| ------- | ----------- | ----------- | --------- |
| $g(x)$  | -  | $0$| +|
| $f'(x)$ | -  | $0$| +|
| $f(x)$  | décroissant | $f(\alpha)$ | croissant |

</details>