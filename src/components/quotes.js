const quotes=[
{   id: 1,     
    name: "Friedrich Nietzsche",
         imgURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Nietzsche187a.jpg/440px-Nietzsche187a.jpg",
    quote: " That which does not kill us makes us stronger.    The lonely one offers his hand too quickly to whomever he encounters.",
    quote2: "There are no facts, only interpretations.",
    quote3: "Whoever fights monsters should see to it that in the process he does not become a monster. And if you gaze long enough into an abyss, the abyss will gaze back into you. ",

    quote4: "Without music, life would be a mistake.    It is not a lack of love, but a lack of friendship that makes unhappy marriages."
},
    {
    id: 2, 
    name: "Albert Einstein",
    imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7I5FTmxFdBjwPtWC1ziBcdP7ZnE2y5g3LDg&usqp=CAU",
    quote: "We cannot solve our problems with the same thinking we used when we created them. A clever person solves a problem. A wise person avoids it.",
    quote2: "Any fool can know. The point is to understand..",
    quote3: "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle. ",
    
    quote4: "If you want your children to be intelligent, read them fairy tales. If you want them to be more intelligent, read them more fairy tales."

},
{
    id: 3, 
    name: "Socrates",
         imgURL: "data:image/jpeg;base64,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",
    quote: "There is only one good, knowledge, and one evil, ignorance. ",

    quote2: "No man has the right to be an amateur in the matter of physical training. It is a shame for a man to grow old without seeing the beauty and strength of which his body is capable.",

    quote3: "Education is the kindling of a flame, not the filling of a vessel.",
    
    quote4: "There is only one good, knowledge, and one evil, ignorance. Be slow to fall into friendship, but when you are in, continue firm and constant."},

    {
    id: 4, 
     name: " Plato   ",
    imgURL: "https://images.gr-assets.com/authors/1393978633p5/879.jpg",

    quote: "I am the wisest man alive, for I know one thing, and that is that I know nothing.",

    quote2: "Only the dead have seen the end of war.",

    quote3: "Love is a serious mental disease.",
    
    quote4: "I'm trying to think, don't confuse me with facts."
    
},   
{
    id: 5, 
    name: "Aristotle",
    imgURL: "https://media.istockphoto.com/photos/aristotle-sculpture-picture-id1217329715?k=20&m=1217329715&s=612x612&w=0&h=mDbQ85HdQMBYous01IJPRfywQlJa8LTf-FlvYk6nrXU=",
    quote: "Melancholy men are of all others the most witty.",
    quote2: "Knowing yourself is the beginning of all wisdom.",
    quote3: "Hope is a waking dream ",
    
    quote4: "No great mind has ever existed without a touch of madness." 
    
},
 {
    id: 6,
    name:  " Bertrand Russell",
    imgURL: "https://media.gettyimages.com/photos/10101958london-england-puffing-contently-on-his-pipe-famed-bertrand-picture-id514675100?k=20&m=514675100&s=612x612&w=0&h=yjxKVQj1M2TqUvwCrFA2y41rZesIbcUXng8vNbTFPcI=",
    quote:"We are faced with the paradoxical fact that education has become one of the chief obstacles to intelligence and freedom of thought." ,
    quote2: "The whole problem with the world is that fools and fanatics are always so certain of themselves, and wiser people so full of doubts.",

    quote3: "Fear is the main source of superstition, and one of the main sources of cruelty. To conquer fear is the beginning of wisdom. ",
    
    quote4: "Collective fear stimulates herd instinct, and tends to produce ferocity toward those who are not regarded as members of the herd."
    },
 {
    id: 7, 
    name: "Nelson Mandela",
    imgURL: "https://upload.wikimedia.org/wikipedia/commons/0/02/Nelson_Mandela_1994.jpg",

    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",

    quote2: "It always seems impossible until it's done.",
    quote3: "I like friends who have independent minds because they tend to make you see problems from all angles.",
    
    quote4: "Everyone can rise above their circumstances and achieve success if they are dedicated to and passionate about what they do."},
     {
    id: 8, 
    name: "James Cameron",
    imgURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/James_Cameron_by_Gage_Skidmore.jpg/440px-James_Cameron_by_Gage_Skidmore.jpg",
    quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    quote2: "Imagination is a force that can actually manifest a reality.Don't put limitations on yourself.Others will do that for you.",
   
    quote3: "If you set your goals ridiculously high and its a failure, you will fail above everyone elses success.",
    
    quote4: "Curiosity is the most powerful thing you own"},
     {
    id: 9,
    name: "Mark Twain",
    imgURL: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQnoXl3nyxXSU2SZclr-miLFu7CttEwWKdWzZpwY2q9ATc2Amoclpg5n1ghgw",
    quote: "Courage is resistance to fear, mastery of fear - not absence of fear..",
    quote2: "Anger is an acid that can do more harm to the vessel in which it is stored than to anything on which it is poured.",
    quote3: "Age is an issue of mind over matter. If you don't mind, it doesn't matter. ",
    
    quote4: "All you need in this life is ignorance and confidence, and then success is sure." 
    }
     
    
    
];

export default quotes;