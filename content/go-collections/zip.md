---
title: "Zip"
type: docs
forkme_url: https://github.com/jose78/go-collections.git
show_navigation: true
weight: 5
---

Combines two slices (keys and values) into a result map.

```go
func Zip[K comparable, V any](keys []K, values []V, result map[K]V) *Builder[K]
```

* Description: Combines elements from keys and values into the result map.

* Parameters:
    * keys: Slice of keys for the resulting map.
    * values: Slice of values to associate with the keys.
    * result: Map where combined key-value pairs will be stored.


#### Example

```go {linenos=inline,hl_lines=[15],linenostart=1,lineanchors=80}
package main

import (
	"fmt"

	collection "github.com/jose78/go-collection/v2"
)

func main() {
	keys := []string{"a", "b", "c"}
	values := []int{1, 2, 3}
	result := make(map[string]int)

	builder := collection.Zip(keys, values, result)
	if err := builder.Error(); err != nil {
		fmt.Printf("Error during zipping: %v\n", err)
	} else {
		fmt.Println("Zipped map:", result)
	}
}
```