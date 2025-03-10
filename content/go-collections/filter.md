---
title: "Filter"
type: docs
forkme_url: https://github.com/jose78/go-collections.git
show_navigation: true
weight: 2
---
Filters elements from a source based on a predicate function.


```go
func Filter[T any](predicate Predicate[T], source any, dest any) *Builder[T]
```

* Description: Filters elements from source based on the predicate function and stores them in dest.

* Parameters:

    * predicate: Function that evaluates whether an element should be included in the result. It takes an element of type T and returns a bool.

    * source: Source data to filter (expects pointers to slices or maps).

    * dest: Destination where filtered elements will be stored (expects pointers to lists or maps).




#### Example

```go {linenos=inline,hl_lines=[16],linenostart=1,lineanchors=80}
package main

import (
	"fmt"
	collection "github.com/jose78/go-collection/v2"
)

// Filter only even numbers
func filterModule(elem int) bool {
	return elem%2 == 0
}

func main() {
	slice := []int{1, 2, 3, 4, 5}
	filteredSlice := []int{}
	builder := collection.Filter(filterModule, slice, &filteredSlice)
	if builder != nil {
		if err := builder.Error(); err != nil {
			fmt.Printf("Error during filtering: %v\n", err)
		}
	} else {
		fmt.Println("Filtered slice:", filteredSlice)
	}
}
```