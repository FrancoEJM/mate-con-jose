---
titulo: 'Ecuaciones cuadráticas: resolución paso a paso'
descripcion: 'Cómo resolver una ecuación cuadrática con la fórmula general, paso a paso y con verificación.'
tags: ['Álgebra', 'PAES']
fecha: 2026-07-08
duracion: '6 min de lectura'
---

Una **ecuación cuadrática** es cualquier ecuación que se puede escribir en la forma general $ax^2 + bx + c = 0$, con $a \neq 0$. Es uno de los contenidos que más se repite en la PAES, así que vale la pena dominarlo. Veamos un ejercicio completo.

> <div class="etiqueta"><span>✦</span>Enunciado</div>
>
> Resuelve la ecuación
>
> $$
> 2x^2 - 5x - 3 = 0
> $$
>
> encontrando todos los valores reales de $x$ que la satisfacen.

## Paso 1 · Identificar los coeficientes

Comparamos con la forma general $ax^2 + bx + c = 0$. En este caso:

$$
a = 2, \qquad b = -5, \qquad c = -3
$$

## Paso 2 · Aplicar la fórmula general

La fórmula general (o "resolvente") entrega las soluciones:

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

Primero calculamos el **discriminante** $\Delta = b^2 - 4ac$:

$$
\Delta = (-5)^2 - 4(2)(-3) = 25 + 24 = 49
$$

Como $\Delta = 49 > 0$, la ecuación tiene **dos soluciones reales distintas**. Además $\sqrt{49} = 7$, un número exacto.

## Paso 3 · Sustituir y calcular

Reemplazamos los valores en la fórmula:

$$
x = \frac{-(-5) \pm \sqrt{49}}{2(2)} = \frac{5 \pm 7}{4}
$$

Separamos en los dos casos:

$$
x_1 = \frac{5 + 7}{4} = \frac{12}{4} = 3
$$

$$
x_2 = \frac{5 - 7}{4} = \frac{-2}{4} = -\frac{1}{2}
$$

<div class="solucion">
<div class="etiqueta">Solución</div>

$$
x_1 = 3 \qquad \text{y} \qquad x_2 = -\tfrac{1}{2}
$$

</div>

## Paso 4 · Verificar

Un buen hábito: reemplazar cada solución en la ecuación original. Con $x_1 = 3$:

$$
2(3)^2 - 5(3) - 3 = 18 - 15 - 3 = 0 \;\checkmark
$$

Y con $x_2 = -\tfrac{1}{2}$:

$$
2\left(-\tfrac{1}{2}\right)^2 - 5\left(-\tfrac{1}{2}\right) - 3 = \tfrac{1}{2} + \tfrac{5}{2} - 3 = 0 \;\checkmark
$$

Ambas soluciones verifican la ecuación. 🎯
