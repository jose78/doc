---
title: "Map"
type: docs
weight: 4
---

Applies a mapping function to each element of a source.

{{< codeblock  language="go" >}}func Map[T any](mapper Mapper[T], source any, dest any) *Builder[T]
{{< / codeblock  >}}

* Description: Applies the mapper function to each element of source and stores the results in dest.
* Parameters:
    
    * mapper: Function that transforms each element of type T into another type. It takes an element of type T and returns a transformed value of type any.

    * source: Source data to transform (expects pointers to slices or maps).

    * dest: Destination where mapped results will be stored (expects pointers to lists or maps).

Example

{{< codeblock title="Example: Group by age a list of Structs." link="https://go.dev/play/p/lXDIKBvZ3zi" language="go" >}}package main

import (
	"fmt"
	collection "github.com/jose78/go-collection/v2"
)

func main() {
	slice := []int{1, 2, 3, 4, 5}
	var mappedSlice []string

	builderError := collection.Map(func(elem int) any {
		return fmt.Sprintf("Number %d", elem)
	}, slice, &mappedSlice)

	if builderError != nil {
		fmt.Printf("Error during mapping: %v\n", builderError.Error())
	} else {
		fmt.Println("Mapped slice:", mappedSlice)
	}
}
{{< / codeblock  >}}
