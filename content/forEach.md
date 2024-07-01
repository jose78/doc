---
title: "ForEach"
weight: 3
---

Iterates over elements in a source and applies an action for each element.

{{< codeblock language="go" >}}func ForEach[K any](action Action[K], src any) *Builder[K]{{< /codeblock >}}

* Description: Iterates over elements of src and executes the action for each element.
* Parameters:
    
    * action: Function defining the action to perform on each element. It takes an index (int) and an element of type K.
        
    * src: Source data to iterate over (expects pointers to slices or maps).

### Example

{{< codeblock title="Example: Iterate over list." link="https://go.dev/play/p/pK_-23z1pv5" language="go" >}}package main

import (
	"fmt"

	collection "github.com/jose78/go-collection/v2"
)

func actionPrint(idx, elem int) {
	fmt.Printf("Index %d: %d\n", idx, elem)
}

func main() {
	slice := []int{1, 2, 3, 4, 5}
	builder := collection.ForEach(actionPrint, slice)

	if builder != nil {
		fmt.Printf("Error during iteration: %v\n", builder.Error())
	}
} 
{{< /codeblock >}}