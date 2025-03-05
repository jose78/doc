---
title: "GroupBy"
type: docs
forkme_url: https://github.com/jose78/go-collections.git
weight: 4
---

Groups elements from a source based on a key selection function.


```go
func GroupBy[T any](keySelector KeySelector[T], source any, dest any) *Builder[T]
```

* Description: Groups elements from source based on the key returned by keySelector and stores them in dest.
* Parameters:
    * keySelector: Function that extracts a key from each element of type T. It takes an element of type T and returns a key of type any.
    * source: Source data to group (expects pointers to slices or maps).
dest: Destination where grouped elements will be stored (expects pointers to maps).


#### Example

```go {linenos=inline,hl_lines=[27],linenostart=1,lineanchors=80}
package main

import (
	"fmt"

	collection "github.com/jose78/go-collection/v2"
)

type Person struct {
	Name string
	Age  int
}

func keySelectorByAge(person Person) any {
	return person.Age
}

func main() {
	people := []Person{
		{"Alice", 25},
		{"Bob", 30},
		{"Charlie", 25},
	}

	groups := make(map[int][]Person)

	builderError := collection.GroupBy(keySelectorByAge, people, groups)

	if builderError != nil {
		fmt.Printf("Error during grouping: %v\n", builderError.Error())
	} else {
		for age, group := range groups {
			fmt.Printf("People with age %d:\n", age)
			for _, person := range group {
				fmt.Printf("- %s\n", person.Name)
			}
		}
	}

}

```