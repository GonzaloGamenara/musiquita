/* Catálogo de Musiquita.
   Una canción por línea:  Artista|Canción
   (los nombres tienen que parecerse a como figuran en Apple Music / iTunes para que la app encuentre el audio).
   Para sumar o sacar temas editá este archivo, o creá categorías propias desde la app. */
(function () {
  const R = [];
  const add = (id, emoji, name, text) =>
    R.push({
      id, emoji, name,
      items: text.trim().split('\n').map(l => l.trim()).filter(Boolean).map(l => {
        // "Mostrar Artista|Mostrar Título => Artista en iTunes|Título en iTunes"  (la parte de la derecha es opcional)
        const [disp, target] = l.split(' => ');
        const [a, t, ...o] = disp.split('|');
        const it = { a: a.trim(), t: (t || '').trim() };
        if (o.join('|').trim()) it.o = o.join('|').trim();
        if (target) { const [ta, ...tt] = target.split('|'); it.ta = ta.trim(); it.tt = tt.join('|').trim(); }
        return it;
      })
    });

  add('rock-clasico', '🎸', 'Rock nacional clásico', `
Soda Stereo|De Música Ligera
Soda Stereo|Persiana Americana
Soda Stereo|Cuando Pase el Temblor
Soda Stereo|En la Ciudad de la Furia
Soda Stereo|Prófugos
Soda Stereo|Un Millón de Años Luz
Soda Stereo|Té para Tres
Soda Stereo|Signos
Soda Stereo|Trátame Suavemente
Soda Stereo|Sobredosis de TV
Gustavo Cerati|Puente
Gustavo Cerati|Crimen
Gustavo Cerati|Adiós
Charly García|Demoliendo Hoteles
Charly García|Los Dinosaurios
Charly García|Nos Siguen Pegando Abajo
Charly García|Rezo por Vos
Charly García|Promesas Sobre el Bidet
Charly García|Estaba en Llamas Cuando Me Acosté
Charly García|Inconsciente Colectivo
Charly García|Cerca de la Revolución
Almendra|Muchacha Ojos de Papel
Luis Alberto Spinetta|Seguir Viviendo Sin Tu Amor
Fito Páez|Un Vestido y un Amor
Fito Páez|Y Dale Alegría a Mi Corazón
Fito Páez|Mariposa Tecknicolor
Fito Páez|Circo Beat
Fito Páez|11 y 6
Fito Páez|Al Lado del Camino
Fito Páez|Tráfico por Katmandú
Fito Páez|Brillante Sobre el Mic
Los Redonditos de Ricota|Ji Ji Ji
Los Redonditos de Ricota|Yo Caníbal
Los Redonditos de Ricota|Mi Perro Dinamita
Los Redonditos de Ricota|Un Ángel para Tu Soledad
Los Redonditos de Ricota|Vencedores Vencidos
Los Redonditos de Ricota|Gran Lady
Los Redonditos de Ricota|Dr. Jekyll Needs Mr. Hyde
Indio Solari|El Arriero
Indio Solari|Pistolas
Los Abuelos de la Nada|Mil Horas
Los Abuelos de la Nada|Himno de Mi Corazón
Los Abuelos de la Nada|Cosas Mías
Sumo|La Rubia Tarada
Sumo|Mejor No Hablar de Ciertas Cosas
Sumo|Divididos por la Felicidad
Virus|Wadu Wadu
Virus|Pronta Entrega
Virus|Hoy la Vi
Serú Girán|Seminare
Serú Girán|Canción de Alicia en el País
Pappo's Blues|Sucio y Desprolijo
Los Enanitos Verdes|Lamento Boliviano
Los Enanitos Verdes|Mariposas
Los Enanitos Verdes|Por el Resto
Los Ratones Paranoicos|Sin Ti
Los Ratones Paranoicos|Para Ver Mejor
Miguel Mateos|Tirá para Arriba
Miguel Mateos|Cuando Seas Grande
Andrés Calamaro|Flaca
Andrés Calamaro|Crímenes Perfectos
Andrés Calamaro|Paloma
Andrés Calamaro|Estadio Azteca
Andrés Calamaro|Sin Documentos
Los Rodríguez|Hasta Luego
Los Rodríguez|Para No Olvidar
Los Rodríguez|Dulce Condena
Los Pericos|Pupilas Lejanas
Los Pericos|Runaway
Los Pericos|Sin Cadenas
`);

  add('rock-90', '🤘', 'Rock nacional de los 90 y 2000', `
Los Piojos|Verano del 92
Los Piojos|Ay Ay Ay
Los Piojos|Tan Distinto
Los Piojos|Maradó
Los Piojos|Babilonia
Los Piojos|Tres Pájaros de un Tiro
Los Piojos|Pistolero
La Renga|El Revelde
La Renga|Hablando de la Libertad
La Renga|Psilocybe
La Renga|A Tu Lado
La Renga|Tripa y Corazón
La Renga|Balada del Diablo y la Muerte
La Renga|Paja Brava
Babasónicos|Y Qué
Babasónicos|Irresponsables
Babasónicos|Los Calientes
Babasónicos|El Loco
Babasónicos|Desfachatados
Babasónicos|Pendejo
Babasónicos|Carismático
Bersuit Vergarabat|Sr. Cobranza
Bersuit Vergarabat|Se Viene
Bersuit Vergarabat|Yo Tomo
Bersuit Vergarabat|La Argentinidad al Palo
Bersuit Vergarabat|Un Pacto
Los Auténticos Decadentes|El Murguero
Los Auténticos Decadentes|Los Piratas
Los Auténticos Decadentes|La Guitarra
Los Auténticos Decadentes|Loco (Tu Forma de Ser)
Los Auténticos Decadentes|Vení Raquel
Los Auténticos Decadentes|Siga el Baile
Los Auténticos Decadentes|Un Día de Suerte
Los Fabulosos Cadillacs|Matador
Los Fabulosos Cadillacs|Mal Bicho
Los Fabulosos Cadillacs|Vasos Vacíos
Los Fabulosos Cadillacs|El Satánico Dr. Cadillac
Los Fabulosos Cadillacs|Demasiada Presión
Los Fabulosos Cadillacs|Los Condenaditos
Los Fabulosos Cadillacs|Yo No Me Sentaría en Tu Mesa
Los Fabulosos Cadillacs|Carnaval Toda la Vida
Los Fabulosos Cadillacs|Siguiendo la Luz
Divididos|Spaghetti del Rock
Divididos|Qué Tal
Divididos|Ala Delta
Divididos|Paisano de Hurlingham
Divididos|La Era de la Boludez
Divididos|Par Mil
Divididos|El 38
Divididos|Sábado
Vilma Palma e Vampiros|La Pachanga
Vilma Palma e Vampiros|Auto Rojo
Illya Kuryaki and the Valderramas|Abarajame
Illya Kuryaki and the Valderramas|Jaguar
Las Pelotas|Kilómetro 11
Las Pelotas|Será Será
Las Pelotas|Sueños
Rata Blanca|La Leyenda del Hada y el Mago
Rata Blanca|Mujer Amante
Cuarteto de Nos|Ya No Sé Qué Hacer Conmigo
Cuarteto de Nos|Yendo a la Casa de Damián
La Vela Puerca|Zafar
La Vela Puerca|Va a Escampar
Árbol|Cabeza de Hormiga
Estelares|Una Mañana Sin Vos
Los Caligaris|Mi Vida
Callejeros|Prende Fuego
Kapanga|Sin Sol
Intoxicados|Sin Mirar Atrás
Attaque 77|Hacelo por Mí
Attaque 77|Soldadito Marinero
Los Gardelitos|Vamos Todos
Las Pastillas del Abuelo|Desde Algún Lugar
Dante Spinetta|Mil Horas
Pedro Aznar|Quebrado
`);

  add('rock-es', '🌮', 'Rock y pop en español', `
Maná|Rayando el Sol
Maná|Corazón Espinado
Maná|Clavado en un Bar
Maná|Oye Mi Amor
Maná|Vivir Sin Aire
Maná|Mariposa Traicionera
Maná|Labios Compartidos
Maná|Te Lloré un Río
Héroes del Silencio|Entre Dos Tierras
Héroes del Silencio|Maldito Duende
Héroes del Silencio|Avalancha
Mecano|Hijo de la Luna
Mecano|Mujer Contra Mujer
Mecano|Cruz de Navajas
Mecano|Me Cuesta Tanto Olvidarte
Jarabe de Palo|La Flaca
Jarabe de Palo|Depende
Jarabe de Palo|Bonito
La Oreja de Van Gogh|La Playa
La Oreja de Van Gogh|Rosas
La Oreja de Van Gogh|Puedes Contar Conmigo
La Oreja de Van Gogh|Cuídate
Los Prisioneros|El Baile de los que Sobran
Los Prisioneros|Tren al Sur
Los Prisioneros|La Voz de los '80
Café Tacvba|Eres
Café Tacvba|La Ingrata
Caifanes|La Célula Que Explota
Caifanes|Afuera
Molotov|Gimme Tha Power
Molotov|Frijolero
La Ley|Aquí
La Ley|El Duelo
La Ley|Mentira
Juanes|La Camisa Negra
Juanes|A Dios le Pido
Juanes|Es por Ti
Juanes|Para Tu Amor
Chayanne|Torero
Chayanne|Dejaría Todo
Chayanne|Provócame
Ricardo Arjona|Si el Norte Fuera el Sur
Ricardo Arjona|Señora de las Cuatro Décadas
Ricardo Arjona|Quién
Alejandro Sanz|Corazón Partío
Alejandro Sanz|Mi Soledad y Yo
Alejandro Sanz|Amiga Mía
Alejandro Sanz|Cuando Nadie Me Ve
Calle 13|Atrévete-te-te
Calle 13|Latinoamérica
Enrique Iglesias|Bailando
Enrique Iglesias|Hero
Enrique Iglesias|Escape
Enrique Iglesias|Súbeme la Radio
Gloria Estefan|Conga
Gloria Estefan|Hoy
Ricky Martin|Livin' la Vida Loca
Ricky Martin|La Copa de la Vida|Mundial Francia 1998
Ricky Martin|María
Ricky Martin|Vente Pa' Ca
Shakira|Estoy Aquí
Shakira|Ojos Así
Shakira|Ciega, Sordomuda
Shakira|Te Felicito
Shakira|La Tortura
Shakira|Inevitable
`);

  add('rock-int', '🎸', 'Rock internacional', `
Queen|Bohemian Rhapsody
Queen|We Will Rock You
Queen|Don't Stop Me Now
Queen|Another One Bites the Dust
Queen|Somebody to Love
Queen|Under Pressure
Queen|I Want to Break Free
Queen|We Are the Champions
The Beatles|Let It Be
The Beatles|Hey Jude
The Beatles|Yesterday
The Beatles|Come Together
The Beatles|Here Comes the Sun
The Beatles|Help!
The Beatles|Twist and Shout
Led Zeppelin|Stairway to Heaven
Led Zeppelin|Whole Lotta Love
Led Zeppelin|Kashmir
AC/DC|Back in Black
AC/DC|Highway to Hell
AC/DC|Thunderstruck
AC/DC|You Shook Me All Night Long
Guns N' Roses|Sweet Child O' Mine
Guns N' Roses|Welcome to the Jungle
Guns N' Roses|November Rain
Guns N' Roses|Paradise City
Nirvana|Smells Like Teen Spirit
Nirvana|Come as You Are
Nirvana|Lithium
Nirvana|Heart-Shaped Box
Metallica|Enter Sandman
Metallica|Nothing Else Matters
Metallica|One
Metallica|Master of Puppets
Red Hot Chili Peppers|Californication
Red Hot Chili Peppers|Can't Stop
Red Hot Chili Peppers|Under the Bridge
Red Hot Chili Peppers|Scar Tissue
Red Hot Chili Peppers|Snow (Hey Oh)
Green Day|Basket Case
Green Day|American Idiot
Green Day|Boulevard of Broken Dreams
Green Day|Wake Me Up When September Ends
Linkin Park|In the End
Linkin Park|Numb
Linkin Park|Crawling
Linkin Park|What I've Done
Linkin Park|Faint
Foo Fighters|Everlong
Foo Fighters|The Pretender
Foo Fighters|Best of You
The Killers|Mr. Brightside
The Killers|Somebody Told Me
The Killers|When You Were Young
Oasis|Wonderwall
Oasis|Don't Look Back in Anger
Oasis|Champagne Supernova
U2|With or Without You
U2|One
U2|Beautiful Day
Pink Floyd|Another Brick in the Wall, Pt. 2
Pink Floyd|Wish You Were Here
Pink Floyd|Comfortably Numb
Bon Jovi|It's My Life
Bon Jovi|Livin' on a Prayer
Bon Jovi|Always
Aerosmith|I Don't Want to Miss a Thing|Armageddon
Aerosmith|Dream On
Aerosmith|Crazy
Eagles|Hotel California
The Rolling Stones|Paint It Black
The Rolling Stones|(I Can't Get No) Satisfaction
The Rolling Stones|Sympathy for the Devil
Arctic Monkeys|Do I Wanna Know?
Arctic Monkeys|R U Mine?
Muse|Uprising
Muse|Supermassive Black Hole
The Strokes|Last Nite
Blink-182|All the Small Things
Blink-182|I Miss You
Evanescence|Bring Me to Life
System of a Down|Chop Suey!
System of a Down|Toxicity
Radiohead|Creep
Twenty One Pilots|Stressed Out
Twenty One Pilots|Heathens
Fall Out Boy|Sugar, We're Goin Down
My Chemical Romance|Welcome to the Black Parade
Paramore|Misery Business
Panic! At the Disco|I Write Sins Not Tragedies
Panic! At the Disco|High Hopes
The Offspring|Pretty Fly (For a White Guy)
Limp Bizkit|Break Stuff
Rage Against the Machine|Killing in the Name
Kings of Leon|Sex on Fire
Kings of Leon|Use Somebody
Coldplay|Yellow
Coldplay|Fix You
Coldplay|The Scientist
Coldplay|Viva la Vida
Coldplay|Paradise
Coldplay|A Sky Full of Stars
`);

  add('cumbia', '💃', 'Cumbia y cuarteto', `
Rodrigo|La Mano de Dios
Rodrigo|Lo Mejor del Amor
Rodrigo|Ocho Cuarenta
Rodrigo|Soy Cordobés
Rodrigo|Cómo Olvidarla
Rodrigo|Entre Tu Amor y Mi Amor
Gilda|No Me Arrepiento de Este Amor
Gilda|Fuiste
Gilda|Corazón Valiente
Gilda|Se Me Ha Perdido un Corazón
Gilda|Paisaje
La Mona Jiménez|Quién Se Ha Tomado Todo el Vino
La Mona Jiménez|Beso a Beso
Los Palmeras|Bombón Asesino
Los Ángeles Azules|Cómo Te Voy a Olvidar
Los Ángeles Azules|Entrega de Amor
Los Ángeles Azules|17 Años
Los Ángeles Azules|Mis Sentimientos
Ráfaga|Mentirosa
Ráfaga|Fuego en Mi Corazón
Damas Gratis|Se Te Ve la Tanga
Damas Gratis|Ahora Me Doy Cuenta
Los Pibes Chorros|Yo Soy Cordobés
Q'Lokura|Mamá Soltera
Los Charros|Un Cacho de Cielo
Antonio Ríos|Ay Mamá
Márama|Tomaste Mi Corazón
Agapornis|Tengo Tu Love
Mala Fama|El Pelotazo
Banda XXI|Chiquitita
Sebastián Mendoza|Amor de Verano
Los Wawancó|Cumbia del Monte
Karina|La Princesita
Amar Azul|Soy Del Barrio
Grupo Cañaveral|Bombón Asesino
La Banda de Carlitos|Cómo Se Hace
Los Totora|Pa' Que Sepas
Marcos Jiménez|Fuego
Ulises Bueno|Tu Amor Fue una Estafa
Ulises Bueno|Quiero Volver
`);

  add('pop-ar', '🎤', 'Pop argentino', `
Tini|Miénteme
Tini|Cheque
Tini|Maldita Foto
Tini|Oye
Tini|Bar
Tini|Fresa
Tini|La Triste
Tini|Carita Triste
Lali|Boomerang
Lali|Una Na
Lali|A Bailar
Lali|Soy
Lali|Laligera
Lali|Tu Novio
Lali|Ego
Lali|Disciplina
Lali|Motiveishon
Emilia|Esa Mujer
Emilia|Como Si No Importara
Emilia|La Original
Emilia|Cuatro Babys
María Becerra|Wow Wow
María Becerra|High
María Becerra|Acaramelao
María Becerra|Qué Más Pues?
María Becerra|Automático
Nicki Nicole|Wapo Traketero
Nicki Nicole|Colocao
Nicki Nicole|Mamichula
Abel Pintos|Aquí Estoy
Abel Pintos|Motivos
Abel Pintos|La Llave
Diego Torres|Color Esperanza
Diego Torres|Tratar de Estar Mejor
Diego Torres|Sé Que Ya No Volverás
Axel|Si...
Axel|Hoy Es Otro Día
Ricardo Montaner|Tan Enamorados
Ricardo Montaner|Déjame Llorar
Sin Bandera|Entra en Mi Vida
Sin Bandera|Suelta Mi Mano
Miranda!|Don
Miranda!|Prisionero
Miranda!|Perfecta
Miranda!|Yo Te Diré
Tan Biónica|Ciudad Mágica
Tan Biónica|Obsesionario
Tan Biónica|La Melodía de Dios
Natalia Oreiro|Cambio Dolor por Alegría
Sandro|Rosa Rosa
Sandro|Dame Fuego
Sandro|Quiero Llenarme de Ti
Palito Ortega|La Felicidad
Leonardo Favio|Fuiste Mía un Verano
Leonardo Favio|Ella Ya Me Olvidó
Ke Personajes|Mi Casa
Soledad|Pastorutti
Nathy Peluso|Business Woman
Nathy Peluso|Buenos Aires
Lucas Sugo|Cuando Te Vas
`);

  add('urbano-ar', '🧢', 'Trap y música urbana argentina', `
Duki|She Don't Give a FO
Duki|Goteo
Duki|Si Quieren Frontear
Duki|Hello Cotto
Duki|Givenchy
Duki|Marte
Bizarrap|Quevedo: Bzrp Music Sessions, Vol. 52
Bizarrap|Shakira: Bzrp Music Sessions, Vol. 53
Bizarrap|Duki: Bzrp Music Sessions, Vol. 50
Bizarrap|Milo J: Bzrp Music Sessions, Vol. 57
Bizarrap|Paulo Londra: Bzrp Music Sessions, Vol. 23
Bizarrap|Peso Pluma: Bzrp Music Sessions, Vol. 55
Bizarrap|Residente: Bzrp Music Sessions, Vol. 49
Bizarrap|Nicki Nicole: Bzrp Music Sessions, Vol. 13
Bizarrap|L-Gante: Bzrp Music Sessions, Vol. 38
Paulo Londra|Adán y Eva
Paulo Londra|Tal Vez
Paulo Londra|Solo Pienso en Ti
Paulo Londra|Plan A
Paulo Londra|Forever Alone
Trueno|Dance Crip
Trueno|Mamichula
Trueno|Bien o Mal
Wos|Canguro
Wos|Arrancármelo
Wos|Hola
Cazzu|Ella No Es Tuya
Cazzu|Tu Mamá
Tiago PZK|Entre Nosotros
Tiago PZK|Hasta Que Me Olvide
Khea|Loca
LIT Killah|Fuera de Control
L-Gante|Pa' Mi Barrio
L-Gante|Malbec
Neo Pistea|Cuando Te Vea
Ysy A|Buenas
Lucho SSJ|Que Hago?
Rels B|Mala Mía
FMK|Tonto Corazón
Ulises Bueno|Cuando Se Pone Triste
Callejero Fino|Dime Tú
Alan Gomez|Bailando
Yami Safdie|Qué Calor
Ca7riel & Paco Amoroso|Tan Dura
Ca7riel & Paco Amoroso|Un Millón de Euros
Los Pericos|Sin Cadenas
`);

  add('latino', '🔥', 'Reggaetón y latino', `
Daddy Yankee|Gasolina
Daddy Yankee|Dura
Daddy Yankee|Con Calma
Daddy Yankee|Limbo
Don Omar|Danza Kuduro
Don Omar|Dale Don Dale
Wisin & Yandel|Rakata
Wisin & Yandel|Estoy Enamorado
Wisin & Yandel|Sexy Movimiento
Luis Fonsi|Despacito
Luis Fonsi|Échame la Culpa
Bad Bunny|Dákiti
Bad Bunny|Safaera
Bad Bunny|Tití Me Preguntó
Bad Bunny|Me Porto Bonito
Bad Bunny|Yonaguni
Bad Bunny|Moscow Mule
Bad Bunny|Callaíta
Bad Bunny|Ojitos Lindos
Bad Bunny|Monaco
J Balvin|Mi Gente
J Balvin|Ginza
J Balvin|Ay Vamos
J Balvin|Safari
Karol G|Tusa
Karol G|Provenza
Karol G|Bichota
Karol G|TQG
Maluma|Felices los 4
Maluma|Hawái
Maluma|Corazón
Maluma|11 PM
Ozuna|Baila Baila Baila
Ozuna|Taki Taki
Becky G|Mayores
Becky G|Sin Pijama
Farruko|Pepas
Rauw Alejandro|Todo de Ti
Rauw Alejandro|Desesperados
Feid|Normal
Feid|Chorrito Pa Las Animas
Quevedo|Columbia
Myke Towers|Lala
Nicky Jam|El Perdón
Nicky Jam|X
Romeo Santos|Propuesta Indecente
Prince Royce|Stand by Me
Prince Royce|Corazón Sin Cara
Marc Anthony|Vivir Mi Vida
Marc Anthony|Valió la Pena
Shakira|Hips Don't Lie
Shakira|Waka Waka (This Time for Africa)|Mundial 2010
Shakira|Loca
Shakira|Chantaje
Shakira|Whenever, Wherever
Shakira|Bzrp Music Sessions, Vol. 53
Sebastián Yatra|Traicionera
Camilo|Vida de Rico
Anitta|Envolver
Peso Pluma|Ella Baila Sola
Grupo Frontera|Un x100to
Rosalía|Despechá
Rosalía|Malamente
Rosalía|Con Altura
Don Omar|Danza Kuduro
Pitbull|Give Me Everything
Pitbull|Timber
Natti Natasha|Criminal
Becky G|Shower
Lunay|Soltera
Zion & Lennox|Yo Voy
Plan B|Si No Le Contesto
Tito El Bambino|El Amor
`);

  add('pop-2000', '💿', 'Pop internacional 2000s y 2010s', `
Britney Spears|...Baby One More Time
Britney Spears|Toxic
Britney Spears|Oops!... I Did It Again
Britney Spears|Womanizer
Rihanna|Umbrella
Rihanna|Diamonds
Rihanna|We Found Love
Rihanna|Only Girl (In the World)
Rihanna|Don't Stop the Music
Beyoncé|Crazy in Love
Beyoncé|Single Ladies (Put a Ring on It)
Beyoncé|Halo
Beyoncé|Love on Top
Katy Perry|Firework
Katy Perry|California Gurls
Katy Perry|Roar
Katy Perry|Teenage Dream
Katy Perry|Dark Horse
Lady Gaga|Poker Face
Lady Gaga|Just Dance
Lady Gaga|Bad Romance
Lady Gaga|Paparazzi
Black Eyed Peas|I Gotta Feeling
Black Eyed Peas|Where Is the Love?
Black Eyed Peas|Boom Boom Pow
Black Eyed Peas|Don't Phunk with My Heart
Justin Timberlake|SexyBack
Justin Timberlake|Cry Me a River
Justin Timberlake|Can't Stop the Feeling!|Trolls
Usher|Yeah!
Usher|OMG
P!nk|Just Give Me a Reason
P!nk|So What
P!nk|Get the Party Started
Kesha|TiK ToK
Kesha|Die Young
Avril Lavigne|Complicated
Avril Lavigne|Sk8er Boi
Avril Lavigne|Girlfriend
Miley Cyrus|Party in the U.S.A.
Miley Cyrus|Wrecking Ball
Taylor Swift|Love Story
Taylor Swift|You Belong with Me
Taylor Swift|Shake It Off
Taylor Swift|Blank Space
Jonas Brothers|Burnin' Up
Jonas Brothers|Sucker
Selena Gomez|Come & Get It
Selena Gomez|Love You Like a Love Song
Bruno Mars|Just the Way You Are
Bruno Mars|Grenade
Bruno Mars|Uptown Funk
Bruno Mars|Locked Out of Heaven
Bruno Mars|The Lazy Song
Maroon 5|Moves Like Jagger
Maroon 5|Sugar
Maroon 5|This Love
Maroon 5|Payphone
OneRepublic|Counting Stars
OneRepublic|Apologize
Adele|Rolling in the Deep
Adele|Someone Like You
Adele|Hello
Adele|Set Fire to the Rain
Ed Sheeran|Shape of You
Ed Sheeran|Perfect
Ed Sheeran|Thinking Out Loud
Ed Sheeran|The A Team
Sia|Chandelier
Sia|Cheap Thrills
Shawn Mendes|Stitches
Shawn Mendes|Treat You Better
Justin Bieber|Baby
Justin Bieber|Sorry
Justin Bieber|Love Yourself
Eminem|Lose Yourself|8 Millas
Eminem|Without Me
Eminem|Love the Way You Lie
Nelly Furtado|Promiscuous
Nelly Furtado|Maneater
Amy Winehouse|Rehab
Amy Winehouse|Back to Black
Gnarls Barkley|Crazy
Flo Rida|Low
Flo Rida|Right Round
LMFAO|Party Rock Anthem
LMFAO|Sexy and I Know It
Jason Derulo|Whatcha Say
Jason Derulo|Talk Dirty
Carly Rae Jepsen|Call Me Maybe
Gotye|Somebody That I Used to Know
PSY|Gangnam Style
Owl City|Fireflies
One Direction|What Makes You Beautiful
One Direction|Story of My Life
Lorde|Royals
Ellie Goulding|Lights
Fergie|London Bridge
Fergie|Fergalicious
Christina Aguilera|Genie in a Bottle
Christina Aguilera|Beautiful
Nicki Minaj|Super Bass
Nicki Minaj|Starships
Calvin Harris|Summer
`);

  add('pop-actual', '🎧', 'Pop actual', `
The Weeknd|Blinding Lights
The Weeknd|Starboy
The Weeknd|Save Your Tears
Dua Lipa|Levitating
Dua Lipa|Don't Start Now
Dua Lipa|New Rules
Billie Eilish|bad guy
Billie Eilish|ocean eyes
Billie Eilish|lovely
Billie Eilish|What Was I Made For?
Ariana Grande|7 rings
Ariana Grande|thank u, next
Ariana Grande|Into You
Ariana Grande|no tears left to cry
Harry Styles|As It Was
Harry Styles|Watermelon Sugar
Harry Styles|Adore You
Olivia Rodrigo|drivers license
Olivia Rodrigo|good 4 u
Olivia Rodrigo|vampire
Post Malone|Circles
Post Malone|Sunflower
Post Malone|rockstar
Doja Cat|Say So
Doja Cat|Woman
Doja Cat|Kiss Me More
Sabrina Carpenter|Espresso
Sabrina Carpenter|Please Please Please
Miley Cyrus|Flowers
Lizzo|Good as Hell
Imagine Dragons|Believer
Imagine Dragons|Thunder
Imagine Dragons|Radioactive
Imagine Dragons|Demons
Lewis Capaldi|Someone You Loved
Sam Smith|Stay with Me
Sam Smith|Unholy
Taylor Swift|Anti-Hero
Taylor Swift|Cruel Summer
Taylor Swift|Lover
Camila Cabello|Havana
Camila Cabello|Señorita
Charlie Puth|See You Again
Charlie Puth|Attention
Tones and I|Dance Monkey
Lil Nas X|Old Town Road
Lil Nas X|MONTERO (Call Me By Your Name)
Chappell Roan|Good Luck, Babe!
Chappell Roan|Pink Pony Club
Benson Boone|Beautiful Things
Kendrick Lamar|Not Like Us
Kendrick Lamar|HUMBLE.
Travis Scott|SICKO MODE
Drake|Hotline Bling
Drake|One Dance
Drake|God's Plan
Rema|Calm Down
Glass Animals|Heat Waves
Lady Gaga|Die With A Smile
Rosé|APT.
Tate McRae|greedy
Teddy Swims|Lose Control
Zach Bryan|Something in the Orange
Morgan Wallen|Last Night
Ice Spice|Munch (Feelin' U)
SZA|Kill Bill
SZA|Snooze
Miley Cyrus|Used to Be Young
Joji|Glimpse of Us
Måneskin|Beggin'
Måneskin|I Wanna Be Your Slave
Gigi Perez|Sailor Song
`);

  add('peques', '🧒', 'Hits de la infancia', `
Miley Cyrus|Best of Both Worlds|Hannah Montana
Hannah Montana|Nobody's Perfect|Hannah Montana
Miley Cyrus|The Climb|Hannah Montana: La película
High School Musical Cast|Breaking Free|High School Musical
High School Musical Cast|We're All in This Together|High School Musical
High School Musical Cast|Get'cha Head in the Game|High School Musical
High School Musical Cast|What Time Is It?|High School Musical 2
Camp Rock Cast|This Is Me|Camp Rock
Camp Rock Cast|We Rock|Camp Rock
Demi Lovato|Get Back
Violetta|En Mi Mundo|Violetta
Violetta|Te Creo|Violetta
Violetta|Ser Mejor|Violetta
Violetta|Podemos|Violetta
Violetta|Tienes el Talento|Violetta
RBD|Rebelde|Rebelde
RBD|Tras de Mí
RBD|Solo Quédate en Silencio
RBD|Nuestro Amor
RBD|Celestial
RBD|Un Poco de Tu Amor
Las Ketchup|Aserejé
O-Zone|Dragostea Din Tei
Eiffel 65|Blue (Da Ba Dee)
Aqua|Barbie Girl
Crazy Frog|Axel F
El Chombo|Chacarron Macarron
Shaggy|It Wasn't Me
Daddy Yankee|Gasolina
Pitbull|Culo
Jonas Brothers|Year 3000
Aly & AJ|Potential Breakup Song
The Cheetah Girls|Cheetah Sisters
Cheetah Girls|Strut
Vanessa Hudgens|Say OK
Hilary Duff|Come Clean
Hilary Duff|So Yesterday
Ashlee Simpson|Pieces of Me
Lindsay Lohan|Rumors
Jesse McCartney|Beautiful Soul
Sean Kingston|Beautiful Girls
Tokio Hotel|Monsoon
Tokio Hotel|Durch den Monsun
Dragon Ball|Cha-La Head-Cha-La
Los Pitufos|La Canción de los Pitufos
Bob Esponja|La Canción de Bob Esponja
Fito Páez|Soldadito Marinero
Kidz Bop Kids|Shake It Off
Jesse & Joy|Espacio Sideral
Jesse & Joy|Corre
Tan Biónica|Ciudad Mágica
Los Wachiturros|La Moto Wachiturra
Los Wachiturros|Los Pibes del Barrio
Floricienta|Corazón Valiente|Floricienta
Patito Feo|Aliados|Patito Feo
Patito Feo|Si Yo Fuera Un Pajarito
Chiquititas|Chiquititas|Chiquititas
Disney Channel|Un Mundo Ideal
`);

  add('cine', '🎬', 'Cine, series y Disney', `
Idina Menzel|Let It Go|Frozen
Auliʻi Cravalho|How Far I'll Go|Moana
Randy Newman|You've Got a Friend in Me|Toy Story
Elton John|Can You Feel the Love Tonight|El Rey León
Elton John|Circle of Life|El Rey León
Phil Collins|You'll Be in My Heart|Tarzán
Phil Collins|Two Worlds|Tarzán
Celine Dion|My Heart Will Go On|Titanic
Celine Dion|Beauty and the Beast|La Bella y la Bestia
Whitney Houston|I Will Always Love You|El Guardaespaldas
Survivor|Eye of the Tiger|Rocky III
Ray Parker Jr.|Ghostbusters|Los Cazafantasmas
Lady Gaga|Shallow|Nace una estrella
Bryan Adams|(Everything I Do) I Do It for You|Robin Hood: Príncipe de los ladrones
Kenny Loggins|Danger Zone|Top Gun
Berlin|Take My Breath Away|Top Gun
Adele|Skyfall|James Bond: Skyfall
Billie Eilish|No Time to Die|James Bond: Sin tiempo para morir
Wiz Khalifa|See You Again|Rápidos y Furiosos 7
Dua Lipa|Dance The Night|Barbie
Miguel|Remember Me|Coco
Encanto Cast|We Don't Talk About Bruno|Encanto
Encanto Cast|Surface Pressure|Encanto
Jon Batiste|It's All Right|Soul
Sebastian Yatra|Dos Oruguitas|Encanto
Daniel Powter|Bad Day
Louis Armstrong|What a Wonderful World|Buenos días, Vietnam
Aerosmith|I Don't Want to Miss a Thing|Armageddon
Vanessa Carlton|A Thousand Miles
Shakira|Try Everything|Zootrópolis
Sia|Never Give Up|Lion
Pharrell Williams|Happy|Mi Villano Favorito 2
Justin Timberlake|Can't Stop the Feeling!|Trolls
Ariana Grande|Beauty and the Beast|La Bella y la Bestia (2017)
Kristen Bell|For the First Time in Forever|Frozen
Jonathan Groff|Reindeer(s) Are Better Than People|Frozen
Tim Curry|Sweet Transvestite|The Rocky Horror Picture Show
Tom Cruise|Danger Zone
Bill Medley|(I've Had) The Time of My Life|Dirty Dancing
Starship|Nothing's Gonna Stop Us Now|Mannequin
Hans Zimmer|Time|Inception
Hans Zimmer|He's a Pirate|Piratas del Caribe
John Williams|Imperial March|Star Wars
John Williams|Hedwig's Theme|Harry Potter
Ennio Morricone|The Good, the Bad and the Ugly|El bueno, el malo y el feo
The Black Eyed Peas|Pump It
Eminem|Lose Yourself|8 Millas
Queen|Bohemian Rhapsody
Los Del Río|Macarena
Gloria Gaynor|I Will Survive
Bee Gees|Stayin' Alive|Fiebre del sábado por la noche
`);

  add('retro', '🕺', 'Hits de los 80 y 90', `
Michael Jackson|Billie Jean
Michael Jackson|Thriller
Michael Jackson|Beat It
Michael Jackson|Smooth Criminal
Michael Jackson|Bad
Michael Jackson|Don't Stop 'Til You Get Enough
Michael Jackson|Black or White
Madonna|Like a Virgin
Madonna|La Isla Bonita
Madonna|Vogue
Madonna|Hung Up
Whitney Houston|I Wanna Dance with Somebody (Who Loves Me)
George Michael|Careless Whisper
George Michael|Faith
Cyndi Lauper|Girls Just Want to Have Fun
Cyndi Lauper|Time After Time
a-ha|Take On Me
Backstreet Boys|I Want It That Way
Backstreet Boys|Everybody (Backstreet's Back)
Backstreet Boys|As Long as You Love Me
*NSYNC|Bye Bye Bye
*NSYNC|It's Gonna Be Me
Spice Girls|Wannabe
Spice Girls|Spice Up Your Life
Cher|Believe
Destiny's Child|Survivor
Destiny's Child|Say My Name
TLC|No Scrubs
TLC|Waterfalls
Ace of Base|The Sign
Haddaway|What Is Love
Snap!|Rhythm Is a Dancer
Vengaboys|Boom, Boom, Boom, Boom!!
Lou Bega|Mambo No. 5 (A Little Bit of...)
Toto|Africa
Journey|Don't Stop Believin'
Billy Joel|Piano Man
Kool & The Gang|Celebration
Earth, Wind & Fire|September
ABBA|Dancing Queen
ABBA|Mamma Mia
ABBA|Gimme! Gimme! Gimme!
Donna Summer|I Feel Love
Village People|Y.M.C.A.
Rick Astley|Never Gonna Give You Up
Prince|Purple Rain
Wham!|Last Christmas
Bonnie Tyler|Total Eclipse of the Heart
Europe|The Final Countdown
Bee Gees|Night Fever
Eurythmics|Sweet Dreams (Are Made of This)
Depeche Mode|Enjoy the Silence
The Cure|Friday I'm in Love
Duran Duran|Hungry Like the Wolf
Simple Minds|Don't You (Forget About Me)
Tears for Fears|Everybody Wants to Rule the World
Dexys Midnight Runners|Come On Eileen
Roxette|It Must Have Been Love
Roxette|The Look
Sinéad O'Connor|Nothing Compares 2 U
Alanis Morissette|You Oughta Know
Alanis Morissette|Ironic
Oasis|Wonderwall
Blur|Song 2
Smash Mouth|All Star
Third Eye Blind|Semi-Charmed Life
Bon Jovi|Livin' on a Prayer
Guns N' Roses|Sweet Child O' Mine
`);

  add('folklore', '🪕', 'Folklore y tango', `
Mercedes Sosa|Gracias a la Vida
Mercedes Sosa|Solo le Pido a Dios
Mercedes Sosa|Todo Cambia
Mercedes Sosa|Alfonsina y el Mar
Carlos Gardel|Volver
Carlos Gardel|Mi Buenos Aires Querido
Carlos Gardel|Por una Cabeza
Carlos Gardel|El Día Que Me Quieras
Carlos Gardel|Cuesta Abajo
Astor Piazzolla|Libertango
Astor Piazzolla|Oblivion
Astor Piazzolla|Adiós Nonino
Atahualpa Yupanqui|Los Ejes de Mi Carreta
Atahualpa Yupanqui|Luna Tucumana
Horacio Guarany|Si Se Calla el Cantor
León Gieco|Solo le Pido a Dios
León Gieco|Sólo Le Pido a Dios
León Gieco|Cinco Siglos Igual
León Gieco|La Colina de la Vida
Los Chalchaleros|Zamba de Mi Esperanza
Los Fronterizos|Mi Valle
Los Nocheros|Vuelve
Los Nocheros|Quimey Neuquén
Soledad Pastorutti|Y Dale Alegría
Soledad Pastorutti|Fruta Dulce
Soledad Pastorutti|Pa Mi Gente
Abel Pintos|Aquí Estoy
Roberto Goyeneche|Balada para un Loco
Julio Sosa|La Cumparsita
Aníbal Troilo|Quejas de Bandoneón
Carlos Di Sarli|Bahía Blanca
Bajofondo|Pa' Bailar
Bajofondo|Mi Corazón
Gotan Project|Santa María (Del Buen Ayre)
Gotan Project|Una Música Brutal
Julia Zenko|Tango
Susana Rinaldi|Balada para un Loco
Vicentico|Algo Contigo
Jorge Cafrune|Zamba de Vargas
Eduardo Falú|Zamba de Lozano
Los Tekis|Chacarera del Rancho
Los Manseros Santiagueños|Chacarera del Rancho
Divididos|Ala Delta
Los Cantores del Alba|Zamba del Chaguanco
Dúo Coplanacu|Zamba de Mi Esperanza
Chaqueño Palavecino|Guitarra Dímelo Tú
Chaqueño Palavecino|El Gaucho Bohemio
Las Voces de Orán|Fruta Dulce
`);

  add('mundial', '🏟️', 'Mundial y cancha', `
La Mosca|Muchachos, Ahora Nos Volvimos a Ilusionar|Mundial 2022 · Argentina campeón
Shakira|Waka Waka (This Time for Africa)|Mundial 2010
K'naan|Wavin' Flag|Mundial 2010
Ricky Martin|La Copa de la Vida|Mundial Francia 1998
Queen|We Are the Champions
Queen|We Will Rock You
The White Stripes|Seven Nation Army
Pitbull|We Are One (Ole Ola)|Mundial 2014
Jennifer Lopez|On the Floor
Nicky Jam|Live It Up|Mundial 2018
Trinidad Cardona|Hayya Hayya (Better Together)|Mundial 2022
Ozuna|Arhbo|Mundial 2022
Nicki Minaj|Tukoh Taka|Mundial 2022
Charly García|Maradona Blues
Rodrigo|La Mano de Dios
Los Fabulosos Cadillacs|Vasos Vacíos
Los Piojos|Maradó
Lionel Messi|Bzrp
Bizarrap|Muchachos
Boca Juniors|Soy de Boca
Los Palmeras|Fiesta
Los Auténticos Decadentes|Los Piratas
Soda Stereo|De Música Ligera
Divididos|Salir a Comprar Fuego
Los Redonditos de Ricota|Ji Ji Ji
Fito Páez|Un Vestido y un Amor
Charly García|Los Dinosaurios
Los Pibes Chorros|Soy de Boca
Alcides|Cualquier Cosa Menos Esto
Gianluca Grignani|Falco a Metà
FIFA|Hayya Hayya
Bad Bunny|Tití Me Preguntó
Daddy Yankee|Gasolina
Maná|Rayando el Sol
Enrique Iglesias|Bailando
Estopa|Como Camarón
Los Rodríguez|Hasta Luego
`);

  add('electro', '🎹', 'Electrónica y dance', `
Daft Punk|One More Time
Daft Punk|Get Lucky
Daft Punk|Harder, Better, Faster, Stronger
Daft Punk|Around the World
Avicii|Wake Me Up
Avicii|Levels
Avicii|Hey Brother
Calvin Harris|Summer
Calvin Harris|This Is What You Came For
Calvin Harris|Feel So Close
David Guetta|Titanium
David Guetta|When Love Takes Over
David Guetta|Memories
Swedish House Mafia|Don't You Worry Child
Martin Garrix|Animals
Martin Garrix|In the Name of Love
Zedd|Clarity
Zedd|Stay
Kygo|Firestone
Major Lazer|Lean On
Major Lazer|Cold Water
Marshmello|Happier
Marshmello|Alone
The Chainsmokers|Closer
The Chainsmokers|Don't Let Me Down
Alan Walker|Faded
Skrillex|Scary Monsters and Nice Sprites
Skrillex|Bangarang
Deadmau5|Ghosts 'n' Stuff
Tiësto|The Business
Tiësto|Adagio for Strings
Robin Schulz|Sugar
Clean Bandit|Rather Be
Clean Bandit|Rockabye
Disclosure|Latch
Fatboy Slim|Praise You
The Prodigy|Firestarter
Darude|Sandstorm
Eiffel 65|Blue (Da Ba Dee)
Lost Frequencies|Are You with Me
Mark Ronson|Uptown Funk
Kungs|This Girl
Gryffin|Feel Good
Cascada|Evacuate the Dancefloor
Basshunter|Now You're Gone
Safri Duo|Played-A-Live
Benny Benassi|Satisfaction
Armin van Buuren|This Is What It Feels Like
Axwell /\\ Ingrosso|More Than You Know
Fisher|Losing It
Peggy Gou|(It Goes Like) Nanana
Dua Lipa|Levitating
Bizarrap|Quevedo: Bzrp Music Sessions, Vol. 52
`);


  add('hiphop', '🎤', 'Hip hop y R&B', `
Dr. Dre|Still D.R.E.
Snoop Dogg|Drop It Like It's Hot
50 Cent|In da Club
50 Cent|Candy Shop
Jay-Z|Empire State of Mind
Kanye West|Stronger
Kanye West|Gold Digger
Kanye West|Heartless
Lil Wayne|A Milli
Lil Wayne|Lollipop
Nelly|Hot in Herre
Ludacris|Stand Up
OutKast|Hey Ya!
OutKast|Ms. Jackson
Missy Elliott|Get Ur Freak On
Alicia Keys|Fallin'
Alicia Keys|No One
Alicia Keys|If I Ain't Got You
Mary J. Blige|Family Affair
Ne-Yo|So Sick
Chris Brown|Run It!
Chris Brown|Forever
T.I.|Whatever You Like
Akon|Smack That
Akon|Lonely
Sean Paul|Temperature
Sean Paul|Get Busy
Fetty Wap|Trap Queen
Drake|Passionfruit
Cardi B|Bodak Yellow
Cardi B|WAP
Megan Thee Stallion|Savage
Post Malone|Congratulations
Migos|Bad and Boujee
Lil Uzi Vert|XO Tour Llif3
XXXTENTACION|SAD!
Juice WRLD|Lucid Dreams
Travis Scott|goosebumps
21 Savage|a lot
DMX|Party Up (Up in Here)
The Notorious B.I.G.|Juicy
2Pac|California Love
2Pac|Changes
Wiz Khalifa|Black and Yellow
Mac Miller|Self Care
Kid Cudi|Day 'n' Nite
Childish Gambino|This Is America
Eminem|Stan
Eminem|Mockingbird
Eminem|The Real Slim Shady
Beyoncé|Formation
Rihanna|Work
`);

  add('baladas', '💔', 'Baladas románticas', `
Luis Miguel|La Incondicional
Luis Miguel|Ahora Te Puedes Marchar
Luis Miguel|Por Debajo de la Mesa
Luis Miguel|Hasta Que Me Olvides
Luis Miguel|Cuando Calienta el Sol
Luis Miguel|La Bikina
Juan Gabriel|Amor Eterno
Juan Gabriel|Hasta Que Te Conocí
Juan Gabriel|Querida
José José|El Triste
José José|Almohada
Camilo Sesto|Vivir Así Es Morir de Amor
Franco De Vita|Te Amo
Franco De Vita|Sin Ti
Franco De Vita|Louis
Ricardo Montaner|La Cima del Cielo
Alejandro Fernández|Me Dediqué a Perderte
Alejandro Fernández|Hoy Tengo Ganas de Ti
Marco Antonio Solís|Si No Te Hubieras Ido
Marco Antonio Solís|Tu Cárcel
Roberto Carlos|Amigo
Roberto Carlos|Detalles
Roberto Carlos|Cama y Mesa
Cristian Castro|Azul
Cristian Castro|Lloran las Rosas
Cristian Castro|Por Amarte Así
Chayanne|Salomé
Ricky Martin|Tu Recuerdo
Ricardo Arjona|Historia de Taxi
Il Divo|Regresa a Mí
Andrea Bocelli|Con Te Partirò
Julio Iglesias|Me Olvidé de Vivir
Julio Iglesias|La Nave del Olvido
Sandro|Una Muchacha y una Guitarra
Camila|Mientes
Reik|Creo en Ti
Reik|Yo Quisiera
Pimpinela|Olvídame y Pega la Vuelta
Nino Bravo|Libre
Nino Bravo|Un Beso y una Flor
Rocío Dúrcal|Amor Eterno
Los Ángeles Negros|Y Volveré
Los Panchos|Contigo
Armando Manzanero|Somos Novios
Los Bukis|Y Ahora Te Vas
Joan Sebastian|Secreto de Amor
Yuri|Maldita Primavera
Emmanuel|Toda la Vida
Cesar Banana Pueyrredón|Bombón
`);

  add('salsa', '🌴', 'Salsa, merengue y tropical', `
Celia Cruz|La Vida Es un Carnaval
Celia Cruz|Quimbara
Marc Anthony|Flor Pálida
Marc Anthony|Y Hubo Alguien
Gilberto Santa Rosa|Conteo Regresivo
Juan Luis Guerra|La Bilirrubina
Juan Luis Guerra|Burbujas de Amor
Juan Luis Guerra|Ojalá Que Llueva Café
Juan Luis Guerra|Bachata Rosa
Carlos Vives|La Bicicleta
Carlos Vives|Fruta Fresca
Carlos Vives|La Tierra del Olvido
Elvis Crespo|Suavemente
Grupo Niche|Cali Pachanguero
Grupo Niche|Una Aventura
Willie Colón|Idilio
Héctor Lavoe|El Cantante
Rubén Blades|Pedro Navaja
Rubén Blades|Plástico
Oscar D'León|Llorarás
Tito Puente|Oye Como Va
Santana|Smooth
Santana|Maria Maria
Gente de Zona|La Gozadera
Jerry Rivera|Amores Como el Nuestro
Los Van Van|Sandunguera
Buena Vista Social Club|Chan Chan
Buena Vista Social Club|Dos Gardenias
Aventura|Obsesión
Aventura|Un Beso
Romeo Santos|Eres Mía
Prince Royce|Darte un Beso
Xtreme|Te Extraño
Monchy y Alexandra|Dos Locos
Wilfrido Vargas|El Jardinero
Fonseca|Te Mando Flores
Daniela Darcourt|Un Año Más
Ráfaga|Mentirosa
Marc Anthony|Vivir Mi Vida
`);

  add('indie', '🎧', 'Indie y rock alternativo', `
Arctic Monkeys|505
Arctic Monkeys|Why'd You Only Call Me When You're High?
Arctic Monkeys|Fluorescent Adolescent
The Kooks|Naive
The Kooks|She Moves in Her Own Way
The Strokes|Reptilia
The Strokes|Someday
Franz Ferdinand|Take Me Out
Vampire Weekend|A-Punk
MGMT|Kids
MGMT|Electric Feel
Phoenix|1901
Tame Impala|The Less I Know the Better
Tame Impala|Let It Happen
Foster the People|Pumped Up Kicks
The Black Keys|Lonely Boy
The Black Keys|Gold on the Ceiling
Two Door Cinema Club|What You Know
Cage the Elephant|Ain't No Rest for the Wicked
Cage the Elephant|Cigarette Daydreams
Gorillaz|Feel Good Inc.
Gorillaz|Clint Eastwood
Yeah Yeah Yeahs|Heads Will Roll
Bloc Party|Helicopter
Arcade Fire|Wake Up
Radiohead|Karma Police
Radiohead|No Surprises
Beck|Loser
Pixies|Where Is My Mind?
Lana Del Rey|Summertime Sadness
Lana Del Rey|Video Games
Lana Del Rey|Born to Die
Lorde|Green Light
Florence + The Machine|Dog Days Are Over
Florence + The Machine|Shake It Out
Hozier|Take Me to Church
The Neighbourhood|Sweater Weather
Mac DeMarco|Chamber of Reflection
Zoé|Labios Rotos
Zoé|Soñé
Aterciopelados|Bolero Falaz
Los Amigos Invisibles|Ponerte Pa' Mí
Babasónicos|Putita
Él Mató a un Policía Motorizado|Chica Rutera
Cuarteto de Nos|Cumpleaños
The Cardigans|Lovefool
Weezer|Buddy Holly
Weezer|Island in the Sun
Vance Joy|Riptide
Of Monsters and Men|Little Talks
`);

  add('metal', '🤘', 'Metal y hard rock', `
Iron Maiden|The Trooper
Iron Maiden|Run to the Hills
Iron Maiden|Fear of the Dark
Black Sabbath|Paranoid
Black Sabbath|Iron Man
Judas Priest|Breaking the Law
Ozzy Osbourne|Crazy Train
Ozzy Osbourne|Mama, I'm Coming Home
Slipknot|Duality
Slipknot|Psychosocial
Pantera|Walk
Megadeth|Symphony of Destruction
Slayer|Raining Blood
Motörhead|Ace of Spades
Scorpions|Wind of Change
Scorpions|Still Loving You
Def Leppard|Pour Some Sugar on Me
Mötley Crüe|Kickstart My Heart
Whitesnake|Here I Go Again
Van Halen|Jump
Van Halen|Panama
Twisted Sister|We're Not Gonna Take It
KISS|I Was Made for Lovin' You
KISS|Rock and Roll All Nite
Deep Purple|Smoke on the Water
Rammstein|Du Hast
Rammstein|Sonne
Rammstein|Ich Will
Disturbed|Down with the Sickness
Disturbed|The Sound of Silence
Avenged Sevenfold|Bat Country
Avenged Sevenfold|Nightmare
Bullet for My Valentine|Tears Don't Fall
Three Days Grace|I Hate Everything About You
Papa Roach|Last Resort
Korn|Blind
Korn|Freak on a Leash
Sepultura|Roots Bloody Roots
Sepultura|Refuse/Resist
Rata Blanca|La Leyenda del Hada y el Mago
Almafuerte|Cuando el Pasado Te Alcance
Hermética|Sentimiento Metálico
V8|Destrucción
Lamb of God|Redneck
Metallica|Fuel
Metallica|The Unforgiven
Guns N' Roses|Don't Cry
Guns N' Roses|Patience
Nickelback|How You Remind Me
Nickelback|Photograph
`);

  add('kpop', '🇰🇷', 'K-pop y fenómenos globales', `
BTS|Dynamite
BTS|Butter
BTS|Boy With Luv
BTS|Fake Love
BTS|Life Goes On
BLACKPINK|DDU-DU DDU-DU
BLACKPINK|Kill This Love
BLACKPINK|How You Like That
BLACKPINK|Pink Venom
PSY|Gentleman
Stray Kids|God's Menu
NewJeans|Hype Boy
NewJeans|Ditto
TWICE|Cheer Up
TWICE|What Is Love?
EXO|Growl
BIGBANG|Fantastic Baby
Super Junior|Sorry, Sorry
Girls' Generation|Gee
LISA|Money
Jungkook|Seven
Jimin|Like Crazy
ROSÉ|On The Ground
aespa|Next Level
ITZY|DALLA DALLA
Lady Gaga|Alejandro
Lady Gaga|Born This Way
Taylor Swift|Bad Blood
Katy Perry|Last Friday Night
`);

  add('regional', '🪗', 'Cumbia mexicana y regional', `
Peso Pluma|La Bebe
Peso Pluma|Lagunas
Natanael Cano|Soy el Diablo
Junior H|Y Lloro
Eslabon Armado|Ella Baila Sola
Grupo Frontera|No Se Va
Fuerza Regida|Bebe Dame
Fuerza Regida|TQM
Carín León|Me Va a Extrañar
Banda MS|Mi Razón de Ser
Banda MS|Hermosa Experiencia
Los Tigres del Norte|La Puerta Negra
Los Tigres del Norte|La Jaula de Oro
Los Tigres del Norte|Contrabando y Traición
Vicente Fernández|Volver, Volver
Vicente Fernández|El Rey
Vicente Fernández|Por Tu Maldito Amor
Pedro Infante|Amorcito Corazón
Selena|Bidi Bidi Bom Bom
Selena|Como la Flor
Selena|Amor Prohibido
Los Temerarios|Te Hice Mal
Los Ángeles Azules|Nunca Es Suficiente
Intocable|Por Amarte
Mariachi Vargas de Tecalitlán|El Son de la Negra
Juan Gabriel|El Noa Noa
Christian Nodal|Adiós Amor
Christian Nodal|Botella Tras Botella
Los Alegres del Barranco|El Moro de Cumpas
Ramón Ayala|Tragos Amargos
Rocío Dúrcal|Costumbres
Jenni Rivera|Ya Lo Sé
Jenni Rivera|La Gran Señora
`);

  add('anime-op', '🍥', 'Openings de anime y juegos', `
Hironobu Kageyama|Cha-La Head-Cha-La|Dragon Ball Z
Hiroshi Kitadani|We Are!|One Piece
Ikimono-gakari|Blue Bird|Naruto Shippuden
Linked Horizon|Guren no Yumiya|Ataque a los Titanes
LiSA|Gurenge|Demon Slayer
LiSA|Crossing Field|Sword Art Online
YUI|Again|Fullmetal Alchemist: Brotherhood
KANA-BOON|Silhouette|Naruto Shippuden
TK from Ling tosite sigure|Unravel|Tokyo Ghoul
YOASOBI|Yoru ni Kakeru
YOASOBI|Idol|Oshi no Ko
Ado|Usseewa
Kenshi Yonezu|Lemon|Drama “Unnatural”
Kenshi Yonezu|KICK BACK|Chainsaw Man
Official HIGE DANdism|Pretender
Official HIGE DANdism|Mixed Nuts|Spy x Family
Aimer|Zankyosanka|Demon Slayer
MAN WITH A MISSION|Database|Log Horizon
MAKE-UP|Pegasus Fantasy|Los Caballeros del Zodíaco
ASIAN KUNG-FU GENERATION|Haruka Kanata|Naruto
FLOW|GO!!!|Naruto
FLOW|Sign|Naruto Shippuden
ORANGE RANGE|Asterisk|Bleach
Eve|Kaikai Kitan|Jujutsu Kaisen
JAM Project|The Hero!!|One Punch Man
Masatoshi Ono|Departure!|Hunter x Hunter
Hiroaki Tommy Tominaga|Sono Chi no Sadame|JoJo's Bizarre Adventure
Yoko Takahashi|A Cruel Angel's Thesis|Neon Genesis Evangelion
The Seatbelts|Tank!|Cowboy Bebop
Crush 40|Live & Learn|Sonic Adventure 2
Crush 40|Sonic Heroes|Sonic Heroes (videojuego)
Dalí|Moonlight Densetsu|Sailor Moon
Ayumi Miyazaki|Brave Heart|Digimon
Mrs. GREEN APPLE|Inferno|Fire Force
King Gnu|Hakujitsu
Creepy Nuts|Bling-Bang-Bang-Born|Mashle
Fujii Kaze|Shinunoga E-Wa
`);

  add('navidad', '🎄', 'Navidad y fiestas', `
Mariah Carey|All I Want for Christmas Is You
Michael Bublé|It's Beginning to Look a Lot Like Christmas
Michael Bublé|Jingle Bells
Bing Crosby|White Christmas
Brenda Lee|Rockin' Around the Christmas Tree
Andy Williams|It's the Most Wonderful Time of the Year
Band Aid|Do They Know It's Christmas?
John Lennon|Happy Xmas (War Is Over)
José Feliciano|Feliz Navidad
Boney M.|Mary's Boy Child - Oh My Lord
Kelly Clarkson|Underneath the Tree
Ariana Grande|Santa Tell Me
Justin Bieber|Mistletoe
Elvis Presley|Blue Christmas
Dean Martin|Let It Snow! Let It Snow! Let It Snow!
Pentatonix|Little Drummer Boy
Stevie Wonder|Happy Birthday
Shakin' Stevens|Merry Christmas Everyone
The Pogues|Fairytale of New York
Slade|Merry Xmas Everybody
Wham!|Last Christmas
Paul McCartney|Wonderful Christmastime
Sia|Santa's Coming for Us
Coldplay|Christmas Lights
Los Auténticos Decadentes|Mi Vida Loca
Luis Miguel|Navidad Navidad
Los Nocheros|Navidad Argentina
Marc Anthony|Navidad Sin Ti
`);

  add('clasicos70', '📻', 'Clásicos de los 60 y 70', `
Fleetwood Mac|Dreams
Fleetwood Mac|Go Your Own Way
David Bowie|Heroes
David Bowie|Space Oddity
David Bowie|Let's Dance
Elton John|Rocket Man
Elton John|Your Song
Elton John|I'm Still Standing
Stevie Wonder|Superstition
Stevie Wonder|I Just Called to Say I Love You
Marvin Gaye|Let's Get It On
Marvin Gaye|What's Going On
Bob Dylan|Like a Rolling Stone
Bob Dylan|Blowin' in the Wind
Simon & Garfunkel|The Sound of Silence
Simon & Garfunkel|Mrs. Robinson
The Beach Boys|Good Vibrations
The Beach Boys|God Only Knows
The Doors|Light My Fire
The Doors|Riders on the Storm
Jimi Hendrix|Purple Haze
Jimi Hendrix|All Along the Watchtower
Creedence Clearwater Revival|Fortunate Son
Creedence Clearwater Revival|Have You Ever Seen the Rain?
The Who|Baba O'Riley
The Who|My Generation
Lynyrd Skynyrd|Sweet Home Alabama
Lynyrd Skynyrd|Free Bird
Bob Seger|Old Time Rock & Roll
Chuck Berry|Johnny B. Goode
Elvis Presley|Can't Help Falling in Love
Elvis Presley|Jailhouse Rock
Ray Charles|Hit the Road Jack
Frank Sinatra|My Way
Frank Sinatra|Fly Me to the Moon
Nat King Cole|L-O-V-E
The Police|Roxanne
The Police|Every Breath You Take
Dire Straits|Sultans of Swing
Dire Straits|Money for Nothing
Phil Collins|In the Air Tonight
Phil Collins|Against All Odds
Supertramp|The Logical Song
Supertramp|Breakfast in America
Boston|More Than a Feeling
Foreigner|I Want to Know What Love Is
Foreigner|Cold as Ice
Heart|Barracuda
Blondie|Heart of Glass
Blondie|Call Me
Carpenters|Close to You
John Denver|Take Me Home, Country Roads
Eric Clapton|Tears in Heaven
Eric Clapton|Layla
Santana|Black Magic Woman
Cat Stevens|Wild World
Don McLean|American Pie
Neil Diamond|Sweet Caroline
The Beatles|Don't Let Me Down
The Beatles|Blackbird
The Beatles|Yellow Submarine
Queen|Killer Queen
Led Zeppelin|Immigrant Song
Rod Stewart|Maggie May
`);

  add('reggae', '🟢', 'Reggae y ska', `
Bob Marley & The Wailers|One Love / People Get Ready
Bob Marley & The Wailers|Three Little Birds
Bob Marley & The Wailers|No Woman, No Cry
Bob Marley & The Wailers|Is This Love
Bob Marley & The Wailers|Redemption Song
Bob Marley & The Wailers|Could You Be Loved
UB40|Red Red Wine
UB40|Can't Help Falling in Love
Peter Tosh|Legalize It
Jimmy Cliff|The Harder They Come
Toots & The Maytals|Pressure Drop
Damian Marley|Welcome to Jamrock
Los Cafres|Tiempos Mejores
Cultura Profética|Lo Que Hay
Cultura Profética|La Complicidad
Natiruts|Presente de Um Beija-Flor
Matisyahu|King Without a Crown
Sublime|Santeria
Sublime|What I Got
The Police|Walking on the Moon
No Doubt|Don't Speak
No Doubt|Just a Girl
The Specials|Ghost Town
Madness|Our House
Ziggy Marley|Tomorrow People
Gondwana|Tu Tiempo
Dread Mar I|Llegando a Ti
Los Pericos|Pupilas Lejanas
Los Pericos|Runaway
Alika|Sin Cadenas
Eddy Grant|Electric Avenue
Inner Circle|Bad Boys
Shaggy|Boombastic
`);

  add('pop-latino', '🌟', 'Pop latino de los 90 y 2000', `
Thalía|Piel Morena
Thalía|Arrasando
Thalía|Entre el Mar y una Estrella
Paulina Rubio|Te Quise Tanto
Paulina Rubio|Mía
Paulina Rubio|Ni Rosas Ni Juguetes
Paulina Rubio|Alma en Libertad
Belinda|Luz Sin Gravedad
Belinda|Bella Traición
Belinda|Egoísta
Anahí|Mi Delirio
Dulce María|Inevitable
Camila|Todo Cambió
Camila|De Mí
Julieta Venegas|Me Voy
Julieta Venegas|Limón y Sal
Natalia Lafourcade|Hasta la Raíz
Natalia Lafourcade|Tú Sí Sabes Quererme
Kany García|Cuando Es Amor
Fanny Lu|Tú No Eres para Mí
Shakira|Pies Descalzos, Sueños Blancos
Shakira|Suerte
Shakira|Hay Amores
Alejandro Sanz|No Es lo Mismo
Alejandro Sanz|Y, ¿Si Fuera Ella?
Gloria Trevi|Todos Me Miran
Gloria Trevi|Pelo Suelto
Lucero|Electricidad
Alejandra Guzmán|Hacer el Amor con Otro
Mónica Naranjo|Sobreviviré
Amaral|Sin Ti No Soy Nada
Amaral|Te Necesito
Pablo Alborán|Solamente Tú
Pablo Alborán|Saturno
Dani Martín|Cero
Melendi|Tu Jardín con Enanitos
Melendi|Barbie de Extrarradio
Estopa|Como Camarón
Estopa|La Raja de Tu Falda
Estopa|Vino Tinto
Fito & Fitipaldis|Por la Boca Vive el Pez
Manu Chao|Me Gustas Tú
Manu Chao|Clandestino
Manu Chao|Bongo Bong
El Canto del Loco|Zapatillas
El Canto del Loco|Besos
La Quinta Estación|El Sol No Regresa
Marta Sánchez|Desesperada
Álex Ubago|Sin Miedo a Nada
David Bisbal|Ave María
David Bisbal|Bulería
Chenoa|Cuando Tú Vas
Merche|Abre Tu Mente
Las Ketchup|Aserejé
Enrique Iglesias|Experiencia Religiosa
Ricky Martin|She Bangs
Shakira|La Tortura
Maná|Eres Mi Religión
Sin Bandera|Mientes Tan Bien
Los Auténticos Decadentes|Es Increíble
`);


  add('intros-es', '📺', 'Openings y temas en español latino', `
Dragon Ball Z|Cha-La Head-Cha-La (Opening latino) => Ricardo Silva|Cha-La Head Cha-La
Dragon Ball Z|Ángeles Fuimos (Ending latino) => Ricardo Silva|Ángeles Fuimos
Dragon Ball Super|Limit Break X Survivor (Opening latino) => Ricardo Silva|Opening 2 Limit Break X Survivor
Dragon Ball GT|Mi Corazón Encantado (Opening latino) => Ricardo Silva|Mi Corazón Encantado Dbgt
Dragon Ball GT|Opening latino => Pablo Galán|Dragon Ball GT Opening
One Piece|El Sake de Binks (Opening latino) => Ricardo Silva|Sake de Binks
Los Caballeros del Zodiaco|Pegasus Fantasy (Opening latino) => Power Up Orchestra|Pegasus Fantasy (From Saint Seiya / Los Caballeros del Zodíaco - Opening Latino) [Live]
Los Caballeros del Zodiaco|Pegasus Fantasy (Cover latino) => James Mart|Pegasus Fantasy (From "Los Caballeros Del Zodiaco") [Cover]
Supercampeones|Moete Hero (Opening latino) => Power Up Orchestra|Supercampeones (Moete Hero Opening Latino) [En Vivo]
Pokémon|Tengo que ser un maestro Pokémon => Pokémon|Tengo Que Ser Un Maestro Pokémon
Digimon|Butterfly (Opening latino) => Miree|Butterfly (From "Digimon") [Cover Español Latino]
Digimon Frontier|Fire! (Opening) => Caminos Cruzados|Fire! (Digimon Frontier Opening)
Sailor Moon|Luz de Luna (Opening latino) => Salomé Anjarí|Moonlight Densetsu (Luz de Luna Opening Latino from Sailor Moon)
Naruto|Haruka Kanata (Opening latino) => Kanne Find|Naruto Opening 2 - Haruka Kanata (Español Latino)
Naruto Shippuden|Silhouette (Opening latino) => Lyrical Legends Music|Silhouette (Español Latino)
Naruto Shippuden|Blue Bird (Opening latino) => Balutaku Covers|Blue Bird (From "Naruto Shippuden") [Cover Español Latino]
Naruto Shippuden|Lovers (Opening latino) => Lyrical Legends Music|Lovers (Español Latino)
Inuyasha|Owarinai Yume (Opening latino) => Salomé Anjarí|Owarinai Yume (Inuyasha Opening 3 Español Latino)
Inuyasha|Grip! (Opening latino) => Salomé Anjarí|Grip! Inuyasha Opening 4 Español Latino
Samurai X|Sobakasu (Opening latino) => Lyrical Legends Music|Sobakasu
Samurai X|Cuando las Lágrimas => Jade|Cuando las Lágrimas (Samurai X) [De Película]
Beyblade|Let It Rip! (Opening latino) => Neversoft|Let It Rip! (Beyblade Opening Latino)
Beyblade|Let's Beyblade! (Opening latino) => Inheres|Let's Beyblade! (Opening Latino)
Candy Candy|Tema de apertura => CoverVerse Latino|Candy Candy (Tema de Apertura)
Sakura Card Captors|Yo Te Atrapo, Tú Me Atrapas (Opening latino) => Adrián Barba|Yo Te Atrapo, Tú Me Atrapas
Sakura Card Captors|Groovy (Ending latino) => Salomé Anjarí|Groovy (Sakura Card Captor Ending Español Latino)
Hunter x Hunter|Ohayou (Opening latino) => Adrián Barba|Ohayou (From "Hunter X Hunter") [Cover Latino]
Shaman King|Over Soul (Opening latino) => Salomé Anjarí|Over Soul (Shaman King Opening Español Latino)
Mazinger Z|Opening latino => Power Up Orchestra|Opening (From "Mazinger Z") [Live]
Los Padrinos Mágicos|Mientras Vueles Conmigo => The Camera is On|Mientras Vueles Conmigo (Los Padrinos Mágicos)
Las Chicas Superpoderosas|Tema final => The Camera is On & Tami Rosales|Las Chicas Superpoderosas (Outro)
Bob Esponja|Canción inicial => Grupo Infantil Guarderia Pon|Bob Esponja (Canción Inicial de la Serie de Dibujos Animados)
Los Pitufos|Somos los Pitufos => Grupo Infantil Guarderia Pon|Somos los Pitufos (De "Los Pitufos de la Tele")
La Abeja Maya|En un país multicolor => Grupo Infantil Guarderia Pon|En un País Multicolor (De "La Abeja Maya")
Los Picapiedra|Tema (Los Pequeños Picapiedra) => Grupo Infantil Guarderia Pon|The Flintstone Kids (From "Los Pequeños Pica Piedra")
Patito Feo|Las Divinas => Zokai|Las Divinas (From "Patito Feo")
Violetta|En mi mundo (en vivo) => Martina Stoessel|En Mi Mundo (Live)
Frozen|Libre soy => Carmen Sarahi|Libre Soy
Frozen|Libre soy (versión Violetta) => Martina Stoessel|Libre Soy (Single Version)
El Rey León|Hakuna Matata => Claudia Pizá|Hakuna Matata
El Rey León|El ciclo sin fin => Tata Vega|Ciclo Sin Fin
Aladdín|Un mundo ideal => ZAYN & Becky G|Un Mundo Ideal (Versión Créditos)
La Sirenita|Bajo el mar => Michael Cruz|Bajo el mar
Pocahontas|Colores en el viento => Susana Zavaleta|Colores en el Viento
Mulán|Reflejo => ANALY|Reflejo
Toy Story|Yo soy tu amigo fiel => Héctor Ortiz|Yo Soy Tu Amigo Fiel
Toy Story|Yo soy tu amigo fiel (Tatiana) => Tatiana|Yo Soy Tu Amigo Fiel
Coco|Recuérdame => Carlos Rivera|Recuérdame
Coco|Un poco loco => Luis Ángel Gómez Jaramillo|Un Poco Loco
Encanto|No se habla de Bruno => Carolina Gaitán|No se habla de Bruno
Encanto|La familia Madrigal => Olga Lucía Vives|La familia Madrigal
Encanto|Dos Oruguitas => Sebastián Yatra|Dos Oruguitas
El Libro de la Selva|Busca lo más vital => Grupo Musical Ginesitos|Busca Lo Mas Vital (De "El Libro de la Selva")
Mary Poppins|Supercalifragilisticoespialidoso => CantaJuego|Supercalifragilisticoespialidoso
`);

  add('intros-en', '🎬', 'Intros de series y películas', `
Los Simpson|Tema principal => The Simpsons|"The Simpsons" Main Title Theme
Padre de Familia|Tema principal => Family Guy|Main Title (From "Family Guy")
Rick y Morty|Tema principal => Rick and Morty & Ryan Elder|Rick and Morty Theme
Yu-Gi-Oh!|Tema principal => Yu-Gi-Oh!|Yu - Gi - Oh! Theme
Power Rangers|Go Go Power Rangers => Power Rangers & Ron Wasserman|Go Go Power Rangers Theme
Los Jóvenes Titanes|Tema principal => PUFFY|TEEN TITANS THEME
Phineas y Ferb|Hoy va a ser un gran día => Bowling for Soup|Today Is Gonna Be a Great Day (Theme Song to Phineas and Ferb)
Kim Possible|Call Me, Beep Me! => Christina Milian|Call Me, Beep Me! (The Kim Possible Song)
Los Magos de Waverly Place|Tema principal => Selena Gomez|Everything Is Not As It Seems (Series Theme Song)
iCarly|Leave It All to Me => Miranda Cosgrove|Leave It All to Me (Theme from ICarly)
Drake y Josh|Found a Way => Drake Bell|Found a Way
Lizzie McGuire|Why Not => Hilary Duff|Why Not
High School Musical|Start of Something New => Troy & Gabriella|Start of Something New
Las Tortugas Ninja|Tema (1987) => Teenage Mutant Ninja Turtles|Teenage Mutant Ninja Turtles Cartoon Opening Theme (1987)
Transformers|Tema principal => Lion|The Transformers Theme
La Pantera Rosa|Tema principal => Henry Mancini|Pink Panther Theme
Batman|Tema (serie de 1966) => Neal Hefti|Batman Theme
Patoaventuras|Tema principal => The Disney Afternoon Studio Chorus|Duck Tales Theme
Friends|I'll Be There for You => The Rembrandts|I'll Be There for You (Theme from Friends)
Game of Thrones|Main Title => Ramin Djawadi|Main Title
La Casa de Papel|Bella Ciao => Manu Pilas|Bella Ciao (Música Original de la Serie La Casa de Papel / Money Heist)
La Casa de Papel|My Life Is Going On => Cecilia Krull|My Life Is Going On (Música Original de la Serie de TV "La Casa de Papel")
Narcos|Tuyo => Rodrigo Amarante|Tuyo (Narcos Theme)
Breaking Bad|Tema principal => Dave Porter|Breaking Bad - Main Title Theme (Extended)
Dr. House|Teardrop => Massive Attack|Teardrop
Peaky Blinders|Red Right Hand => Nick Cave & The Bad Seeds|Red Right Hand
El Juego del Calamar|Pink Soldiers => Kim Sungsoo|Pink Soldiers
Stranger Things|Tema principal => London Music Works|Stranger Things Theme
Star Wars|Título principal => John Williams|Main Title
Jurassic Park|Tema principal => John Williams|Theme from Jurassic Park
Indiana Jones|Raiders March => John Williams|Raiders March
Misión Imposible|Tema principal => Michael Giacchino|Mission: Impossible Theme
James Bond|Tema principal => John Barry|The James Bond Theme
Top Gun|Top Gun Anthem => Harold Faltermeyer|Top Gun Anthem
Rocky|Gonna Fly Now => Bill Conti|Gonna Fly Now (Theme From "Rocky")
Superman|Tema principal => John Williams|Superman - Main Theme (From “Superman: The Movie”)
El Padrino|Tema de amor => Nino Rota|Love Theme from "The Godfather"
El Señor de los Anillos|Concerning Hobbits => Howard Shore|Concerning Hobbits
Harry Potter|Hedwig's Theme => John Williams|Hedwig's Theme
Piratas del Caribe|He's a Pirate => Klaus Badelt|He's a Pirate
Evita|No llores por mí, Argentina => Madonna|Don't Cry for Me Argentina
Cars|Life Is a Highway => Rascal Flatts|Life Is a Highway
Madagascar|I Like to Move It => Madagascar 5|I Like To Move It
Shrek|All Star => Smash Mouth|All Star
Mi Pobre Angelito|Somewhere in My Memory => John Williams|Somewhere in My Memory (Chorus & Orchestra Version)
Volver al Futuro|Tema principal => The Outatime Orchestra|Back To the Future
`);

  window.MUSIQUITA_CATS = R;
})();
