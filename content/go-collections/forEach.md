---
title: "ForEach"
type: docs
forkme_url: https://github.com/jose78/go-collections.git
show_navigation: true
weight: 3
---

Iterates over elements in a source and applies an action for each element.

```go
func ForEach[K any](action Action[K], src any) *Builder[K]
```

* Description: Iterates over elements of src and executes the action for each element.
* Parameters:
    
    * action: Function defining the action to perform on each element. It takes an index (int) and an element of type K.
        
    * src: Source data to iterate over (expects pointers to slices or maps).

#### Example

```go {linenos=inline,hl_lines=[15],linenostart=1,lineanchors=80}
package main

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
```