FROM golang:latest

ADD . .

RUN go build -o test10.exe ./test.go

EXPOSE 80

CMD ["./test10.exe"]