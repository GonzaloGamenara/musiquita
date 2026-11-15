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
        const [a, ...t] = l.split('|');
        return { a: a.trim(), t: t.join('|').trim() };
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
Ricky Martin|La Copa de la Vida
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
Aerosmith|I Don't Want to Miss a Thing
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
Shakira|Waka Waka (This Time for Africa)
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
Justin Timberlake|Can't Stop the Feeling!
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
Eminem|Lose Yourself
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
Miley Cyrus|Best of Both Worlds
Hannah Montana|Nobody's Perfect
Miley Cyrus|The Climb
High School Musical Cast|Breaking Free
High School Musical Cast|We're All in This Together
High School Musical Cast|Get'cha Head in the Game
High School Musical Cast|What Time Is It?
Camp Rock Cast|This Is Me
Camp Rock Cast|We Rock
Demi Lovato|Get Back
Violetta|En Mi Mundo
Violetta|Te Creo
Violetta|Ser Mejor
Violetta|Podemos
Violetta|Tienes el Talento
RBD|Rebelde
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
Floricienta|Corazón Valiente
Patito Feo|Aliados
Patito Feo|Si Yo Fuera Un Pajarito
Chiquititas|Chiquititas
Disney Channel|Un Mundo Ideal
`);

  add('cine', '🎬', 'Cine, series y Disney', `
Idina Menzel|Let It Go
Auliʻi Cravalho|How Far I'll Go
Randy Newman|You've Got a Friend in Me
Elton John|Can You Feel the Love Tonight
Elton John|Circle of Life
Phil Collins|You'll Be in My Heart
Phil Collins|Two Worlds
Celine Dion|My Heart Will Go On
Celine Dion|Beauty and the Beast
Whitney Houston|I Will Always Love You
Survivor|Eye of the Tiger
Ray Parker Jr.|Ghostbusters
Lady Gaga|Shallow
Bryan Adams|(Everything I Do) I Do It for You
Kenny Loggins|Danger Zone
Berlin|Take My Breath Away
Adele|Skyfall
Billie Eilish|No Time to Die
Wiz Khalifa|See You Again
Dua Lipa|Dance The Night
Miguel|Remember Me
Encanto Cast|We Don't Talk About Bruno
Encanto Cast|Surface Pressure
Jon Batiste|It's All Right
Sebastian Yatra|Dos Oruguitas
Daniel Powter|Bad Day
Louis Armstrong|What a Wonderful World
Aerosmith|I Don't Want to Miss a Thing
Vanessa Carlton|A Thousand Miles
Shakira|Try Everything
Sia|Never Give Up
Pharrell Williams|Happy
Justin Timberlake|Can't Stop the Feeling!
Ariana Grande|Beauty and the Beast
Kristen Bell|For the First Time in Forever
Jonathan Groff|Reindeer(s) Are Better Than People
Tim Curry|Sweet Transvestite
Tom Cruise|Danger Zone
Bill Medley|(I've Had) The Time of My Life
Starship|Nothing's Gonna Stop Us Now
Hans Zimmer|Time
Hans Zimmer|He's a Pirate
John Williams|Imperial March
John Williams|Hedwig's Theme
Ennio Morricone|The Good, the Bad and the Ugly
The Black Eyed Peas|Pump It
Eminem|Lose Yourself
Queen|Bohemian Rhapsody
Los Del Río|Macarena
Gloria Gaynor|I Will Survive
Bee Gees|Stayin' Alive
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
La Mosca|Muchachos, Ahora Nos Volvimos a Ilusionar
Shakira|Waka Waka (This Time for Africa)
K'naan|Wavin' Flag
Ricky Martin|La Copa de la Vida
Queen|We Are the Champions
Queen|We Will Rock You
The White Stripes|Seven Nation Army
Pitbull|We Are One (Ole Ola)
Jennifer Lopez|On the Floor
Nicky Jam|Live It Up
Trinidad Cardona|Hayya Hayya (Better Together)
Ozuna|Arhbo
Nicki Minaj|Tukoh Taka
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

  window.MUSIQUITA_CATS = R;
})();
