package main
 
import (
"fmt"
"net/http"
)
 
func main() {
const LineBreak = "\r\n"
http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
fmt.Fprintf(w, "!!!!!!!!!!!!!!!!!!\r\n")
fmt.Fprintf(w, "!! Good morning !!\r\n")
fmt.Fprintf(w, "!!Good afternoon!!\r\n")
fmt.Fprintf(w, "!! Good evening !!\r\n")
fmt.Fprintf(w, "!!!!!!!!!!!!!!!!!!\r\n")
})
http.ListenAndServe(":80", nil)
}