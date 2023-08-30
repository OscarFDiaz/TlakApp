const q="data:audio/mpeg;base64,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yKRsjHVgFoDzj+W2mQamXr9f9ZjQK/////NExIYSESaUANPQcP/RzEVNvH2E1SHPqN0qQFiOp+dxLnJFLX1nqUl79E7//dtCkkB9WZP4aBzKnzddPpX81u/H98/Txp3HFP7paevaTaZFdF32KU6B+1aQYPpBRP0T//NExJARUSqMAMvGcCFHxPkGOLnDiDMwXLPQtD00INBvgrBeRmoJHGO+/X/v///9hCkFL30X+td//F9f///HHGkTEac/aPL/VNpd21ZbKlVCaXCDUQVIYVGDVUaeR15h//NExJ0YmxKQAHiQubav1NyNUOd4gQDw5WBIIJAhCCD5wfnUcXcURQcFn///////g8i///1/////X9fZc5FT6szZ6uY9Xsrqg+NmYqUUsjMYac7HmujKjSxyjylTCQIi//NExI0VKw6UAChQuQGgrB2AwRGHBuewqNJh6gAxZ//////+V//////////+Z7J0t/b1nz0H3MzRw5TnOc4861TzjGzjxuSEQJAcFmB+gQi4FoIlhLAQPjhcoUJEx48g//NExIsRmxacADhOuTQahFUEWf+v//n//xfz/r/////////r+f//b5+fvqvjukSdxsVENOOq7uqlIx0PN7kOLmzCjA6D0TCKEoqRiowQyRjKKD3U6Q9QgwskWFoFo2////NExJcRyxqgADhOvf/5//+/L/f//L/////6c//7a3OMYszMhrGmIrr6mERGIo7mi00gOSxc1DzSZc8JBuERUlEBxiFkGxESRUVIA+BaPD48LgsL2////l///56z//zX//NExKISqxqcABBQvf///////6//1Xr/+5ao56peHKf5+47+ISx5Vi43dRdoQzWPptGY8gWXNOAcH5ZACqmo6CMKEGjWqgL9JJ/+v////n/2/0X/8v/////99Laza1S5//NExKoSMxqcADhOvcc5r5qZ6qjWNqYgPh8weOeyn3Y5zlFrI44xqi8TOwOR0uNhkVAucfBYSAUD0bBUZaoAoKf/O//5//l//////+n//0f//51m7Kl+03ea81Dlqo6x//NExLQRkxqUADhQverJRTSRh6plDB4kglOcrnoPio8RRwkTGwqB0Pg9CUTCUSBaA9IEAkC6iXWXoqTb////X/k/8wk5CMYyfN/6///9vT6lLbMpWKX8wsZTOrTYiYzi//NExMASkyKMAGhOvCKsZ5lZQ6KqUqGMZ2mVSgKALCLGWY4dFZU7U9TF4bV6AEjBiSkGYUHPJ1GhRiwVJTE9Lg1WxZAcdAZMaAjyzyOwlxexJlNssetXWytlau3itNou//NExMgRIxqEAFBOvdUqamVG1uNKN58o8SqjAgXLJIqtacn7NbLKCqGAqaqpdLZjCgJNAyxm/4TfzZvyjgNM3XbBmjugsX+kzUXireFYmwf48b/4u/INtj/im/SuN9s3//NExNYSKwZcAJhKufI7gU847Iqr0FdCiwnzFTi5C+Rium4wOuJESTU0XOC44GbkYJmQqGTILAqKhn1iooaioqS6xUiZBYVBMyCwTIu/9Qr/5kFhcEzICCQqGXfFfF2a//NExOAQWCI0AODGAJn8WkxBTUUzLjk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExPEWgPYMAODGcTk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExOoRsDmEAM4YBDk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExKwAAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExKwAAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExKwAAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExKwAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExKwAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq";export{q as default};
