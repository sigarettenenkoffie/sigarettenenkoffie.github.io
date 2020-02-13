var repos = [
    {
        'Name': 'The book of secret knowledge',
        'Url': 'https://github.com/trimstray/the-book-of-secret-knowledge',
        'Description': 'A collection of inspiring lists, manuals, cheatsheets, blogs, hacks, one-liners, cli/web tools, and more.',
        'Tags': ["Programming", "Guides"]
    },
    {
        'Name': '30 seconds of C#',
        'Url': 'https://github.com/30-seconds/30-seconds-of-csharp',
        'Description': 'Short C# code snippets for all your development needs',
        'Tags': ["C#", "Snippets"]
    },
    {
        'Name': 'Design Patterns in C#',
        'Url': 'https://github.com/RefactoringGuru/design-patterns-csharp',
        'Description': 'repository part of the <a href="https://refactoring.guru/design-patterns/csharp">Refactoring.Guru</a> project',
        'Tags': ["C#", "Design Patterns"]
    },
    {
        'Name': 'The Algorithms - C#',
        'Url': 'https://github.com/TheAlgorithms/C-Sharp',
        'Description': 'This repository contains algorithms and data structures implemented in C# for eductional purposes.',
        'Tags': ["C#", "Algorithms"]
    },
    {
        'Name': 'How to be a Programmer',
        'Url': 'https://github.com/braydie/HowToBeAProgrammer',
        'Description': 'A guide on how to be a Programmer - originally published by Robert L Read<br>Community Version',
        'Tags': ["Programming", "Guides"]
    },
    {
        'Name': 'Every Programmer Should Know',
        'Url': 'https://github.com/mtdvio/every-programmer-should-know',
        'Description': 'A collection of (mostly) technical things every software developer should know.',
        'Tags': ["Programming", "Guides"]
    },
    {
        'Name': 'Docker tutorial',
        'Url': 'https://github.com/DominicBreuker/docker_tutorial',
        'Description': 'Some interesting docker stuff',
        'Tags': ["Docker"]
    },
    {
        'Name': 'ASP.NET Core Developer Roadmap',
        'Url': 'https://github.com/MoienTajik/AspNetCore-Developer-Roadmap',
        'Description': 'An answer to the question: "What should I learn next as an ASP.NET Core developer?"',
        'Tags': ["ASP.NET Core", "Roadmap", "Guides"]
    },
    {
        'Name': 'OS-Tutorial',
        'Url': 'https://github.com/cfenollosa/os-tutorial',
        'Description': 'How to create an OS from scratch!',
        'Tags': ["Operating Systems"]
    },
    {
        'Name': 'Cosmos',
        'Url': 'https://github.com/cfenollosa/os-tutorial',
        'Description': 'Cosmos is an operating system "construction kit".<br \>Build your own OS using managed languages such as C#, VB.NET, and more!',
        'Tags': ["Operating Systems", "C#"]
    },
    {
        'Name': 'Git-It',
        'Url': 'https://github.com/jlord/git-it-electron',
        'Description': 'Git-it is a desktop (Mac, Windows and Linux) app that teaches you how to use Git and GitHub on the command line',
        'Tags': ["Git", "Tutorials"]
    },
    {
        'Name': '30 seconds of code',
        'Url': 'https://github.com/30-seconds/30-seconds-of-code',
        'Description': 'Short JavaScript code snippets for all your development needs',
        'Tags': ["Javascript", "Snippets"]
    },
    {
        'Name': 'JavaScript30',
        'Url': 'https://github.com/wesbos/JavaScript30',
        'Description': 'Build 30 things in 30 days with 30 tutorials',
        'Tags': ["Javascript", "Tutorials"]
    },
    {
        'Name': 'Web developer roadmap 2020',
        'Url': 'https://github.com/kamranahmedse/developer-roadmap',
        'Description': 'charts demonstrating the paths that you can take and the technologies that you would want to adopt in order to become a frontend, backend or a devops',
        'Tags': ["Web", "Roadmap"]
    },
    {
        'Name': 'C-# Algorithms',
        'Url': 'https://github.com/aalhour/C-Sharp-Algorithms',
        'Description': 'Plug-and-play class-library project of standard Data Structures and Algorithms in C# ',
        'Tags': ["C#", "Algorithms", "Data Structures"]
    },
    {
        'Name': 'Advanced Algorithms',
        'Url': 'https://github.com/justcoding121/Advanced-Algorithms',
        'Description': '100+ algorithms & data structures generically implemented in C#.',
        'Tags': ["C#", "Algorithms", "Data Structures"]
    },
    {
        'Name': 'Lodash',
        'Url': 'https://github.com/lodash/lodash',
        'Description': 'A modern JavaScript utility library delivering modularity, performance, & extras.',
        'Tags': ["Javascript", "Libraries"]
    },
    {
        'Name': 'The Algorithms - Javascript',
        'Url': 'https://github.com/TheAlgorithms/Javascript',
        'Description': 'A repository for All algorithms implemented in Javascript (for educational purposes only)',
        'Tags': ["Javascript", "Algorithms"]
    },
    {
        'Name': 'Awesome .NET Core',
        'Url': 'https://github.com/thangchung/awesome-dotnet-core',
        'Description': 'A collection of awesome .NET core libraries, tools, frameworks and software ',
        'Tags': [".NET Core", "Libraries", "Tools", "Frameworks", "Software"]
    },
    {
        'Name': 'MVC.js',
        'Url': 'https://github.com/taniarascia/mvc',
        'Description': 'Simple todo MVC application in plain JavaScript',
        'Tags': ["Javascript", "MVC", "Tutorial"]
    },
    {
        'Name': 'free-for.dev',
        'Url': 'https://github.com/ripienaar/free-for-dev',
        'Description': 'A list of SaaS, PaaS and IaaS offerings that have free tiers of interest to devops and infradev',
        'Tags': ["Software"]
    },
    {
        'Name': 'Fluent {C++}',
        'Url': 'https://www.fluentcpp.com/',
        'Description': 'explorations in expressive code in C++',
        'Tags': ["C++"]
    },
    {
        'Name': 'Awesome Falsehoods',
        'Url': 'https://github.com/kdeldycke/awesome-falsehood',
        'Description': 'A curated list of falsehoods programmers believe in.',
        'Tags': ["Falsehoods"]
    },
    {
        'Name': 'RegexHQ',
        'Url': 'https://github.com/regexhq',
        'Description': 'Collaboration on a world-wide community-driven collection of RegExp patterns and tools that can make our life easier',
        'Tags': ["Regex"]
    },
    {
        'Name': 'Learn Regex',
        'Url': 'https://github.com/ziishaned/learn-regex',
        'Description': 'Learn Regex The Easy Way',
        'Tags': ["Regex"]
    },
    {
        'Name': 'iHateregex.io',
        'Url': 'https://github.com/geongeorge/i-hate-regex',
        'Description': 'a regex cheatsheet for the haters.<br \> don\'t just use; understand.',
        'Tags': ["Regex", "Cheatsheet"]
    },


]