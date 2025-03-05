---
github: "https://github.com/tu-usuario/tu-repositorio"
logo: "/logos/avatar.png"
title: "Go Collections"
type: docs
forkme_url: https://github.com/jose78/go-collections.git
weight: 0
disableNavChevron: true
description: Is a Go (Golang) library that helps you work with and manipulate maps and arrays.
---

**Go Collections** is a Go (Golang) library that helps you work with and manipulate maps and arrays."

 * [Filter](filter/):
    Filters elements of a collection based on a given condition. It returns a new collection that contains only the elements that satisfy the condition.

    *Example*: You could use it to filter out even numbers from a collection of integers.

 * [ForEach](foreach/):
    Iterates over each element in a collection and applies a provided function to it. This is typically used for performing actions on each item, like printing or updating values.

    *Example*: You can use it to print each element of a collection.

 * [GroupBy](groupby/):
    Groups elements of a collection based on a specified key. It returns a map where each key corresponds to a group of elements that share that key.

    *Example*: Grouping a list of people by their city or age.

 * [Map](map/):
    Transforms each element of the collection by applying a given function to each item, returning a new collection of transformed elements.

    *Example*: You can use it to square each number in a collection of integers.

 * [Zip](zip/):
    Combines two collections into a new one, pairing elements at the same index from each collection into tuples. If the collections are of unequal lengths, it will combine until the shortest collection is exhausted.

    *Example*: Combining a list of names with a list of ages into a list of name-age pairs.