library(readr)
dataSet <- read_csv("ZonAnn.Ts+dSST.csv")
data <- dataSet[,c(1:4)]
data[,c(2:4)] <- data[,c(2:4)] + 14
x <- data$Year
y_glob <- data$Glob
poly.global <- lm(y_glob ~ x + I(x^2) + I(x^3))
summary(poly.global)
plot(x,y_glob, pch= 20)
lines(sort(x), fitted(poly.global)[order(x)], col="red", type="l")
