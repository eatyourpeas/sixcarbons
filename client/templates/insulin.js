function TimeBlock(timeblock, starthours, startminutes, stophours, stopminutes, rate, totalhours, totalinsulin) {
    this.timeblock = timeblock;
    this.starthours = starthours;
    this.startminutes = startminutes;
    this.stophours = stophours;
    this.stopminutes = stopminutes;
    this.rate = rate;
    this.totalhours = totalhours;
    this.totalinsulin = totalinsulin;
}

animasRates = [0.025, 0.05, 0.075, 0.1, 0.125, 0.15, 0.175, 0.2, 0.225, 0.25, 0.275, 0.3, 0.325, 0.35, 0.375, 0.4, 0.425, 0.45, 0.475, 0.5, 0.525, 0.55, 0.575, 0.6, 0.625, 0.65, 0.675, 0.7, 0.725, 0.75, 0.775, 0.8, 0.825, 0.85, 0.875, 0.9, 0.925, 0.95, 0.975, 1, 1.025, 1.05, 1.075, 1.1, 1.125, 1.15, 1.175, 1.2, 1.225, 1.25, 1.275, 1.3, 1.325, 1.35, 1.375, 1.4, 1.425, 1.45, 1.475, 1.5, 1.525, 1.55, 1.575, 1.6, 1.625, 1.65, 1.675, 1.7, 1.725, 1.75, 1.775, 1.8, 1.825, 1.85, 1.875, 1.9, 1.925, 1.95, 1.975, 2, 2.025, 2.05, 2.075, 2.1, 2.125, 2.15, 2.175, 2.2, 2.225, 2.25, 2.275, 2.3, 2.325, 2.35, 2.375, 2.4, 2.425, 2.45, 2.475, 2.5, 2.525, 2.55, 2.575, 2.6, 2.625, 2.65, 2.675, 2.7, 2.725, 2.75, 2.775, 2.8, 2.825, 2.85, 2.875, 2.9, 2.925, 2.95, 2.975, 3, 3.025, 3.05, 3.075, 3.1, 3.125, 3.15, 3.175, 3.2, 3.225, 3.25, 3.275, 3.3, 3.325, 3.35, 3.375, 3.4, 3.425, 3.45, 3.475, 3.5, 3.525, 3.55, 3.575, 3.6, 3.625, 3.65, 3.675, 3.7, 3.725, 3.75, 3.775, 3.8, 3.825, 3.85, 3.875, 3.9, 3.925, 3.95, 3.975, 4, 4.025, 4.05, 4.075, 4.1, 4.125, 4.15, 4.175, 4.2, 4.225, 4.25, 4.275, 4.3, 4.325, 4.35, 4.375, 4.4, 4.425, 4.45, 4.475, 4.5, 4.525, 4.55, 4.575, 4.6, 4.625, 4.65, 4.675, 4.7, 4.725, 4.75, 4.775, 4.8, 4.825, 4.85, 4.875, 4.9, 4.925, 4.95, 4.975, 5, 5.025, 5.05, 5.075, 5.1, 5.125, 5.15, 5.175, 5.2, 5.225, 5.25, 5.275, 5.3, 5.325, 5.35, 5.375, 5.4, 5.425, 5.45, 5.475, 5.5, 5.525, 5.55, 5.575, 5.6, 5.625, 5.65, 5.675, 5.7, 5.725, 5.75, 5.775, 5.8, 5.825, 5.85, 5.875, 5.9, 5.925, 5.95, 5.975, 6, 6.025, 6.05, 6.075, 6.1, 6.125, 6.15, 6.175, 6.2, 6.225, 6.25, 6.275, 6.3, 6.325, 6.35, 6.375, 6.4, 6.425, 6.45, 6.475, 6.5, 6.525, 6.55, 6.575, 6.6, 6.625, 6.65, 6.675, 6.7, 6.725, 6.75, 6.775, 6.8, 6.825, 6.85, 6.875, 6.9, 6.925, 6.95, 6.975, 7, 7.025, 7.05, 7.075, 7.1, 7.125, 7.15, 7.175, 7.2, 7.225, 7.25, 7.275, 7.3, 7.325, 7.35, 7.375, 7.4, 7.425, 7.45, 7.475, 7.5, 7.525, 7.55, 7.575, 7.6, 7.625, 7.65, 7.675, 7.7, 7.725, 7.75, 7.775, 7.8, 7.825, 7.85, 7.875, 7.9, 7.925, 7.95, 7.975, 8, 8.025, 8.05, 8.075, 8.1, 8.125, 8.15, 8.175, 8.2, 8.225, 8.25, 8.275, 8.3, 8.325, 8.35, 8.375, 8.4, 8.425, 8.45, 8.475, 8.5, 8.525, 8.55, 8.575, 8.6, 8.625, 8.65, 8.675, 8.7, 8.725, 8.75, 8.775, 8.8, 8.825, 8.85, 8.875, 8.9, 8.925, 8.95, 8.975, 9, 9.025, 9.05, 9.075, 9.1, 9.125, 9.15, 9.175, 9.2, 9.225, 9.25, 9.275, 9.3, 9.325, 9.35, 9.375, 9.4, 9.425, 9.45, 9.475, 9.5, 9.525, 9.55, 9.575, 9.6, 9.625, 9.65, 9.675, 9.7, 9.725, 9.75, 9.775, 9.8, 9.825, 9.85, 9.875, 9.9, 9.925, 9.95, 9.975, 10, 10.025, 10.05, 10.075, 10.1, 10.125, 10.15, 10.175, 10.2, 10.225, 10.25, 10.275, 10.3, 10.325, 10.35, 10.375, 10.4, 10.425, 10.45, 10.475, 10.5, 10.525, 10.55, 10.575, 10.6, 10.625, 10.65, 10.675, 10.7, 10.725, 10.75, 10.775, 10.8, 10.825, 10.85, 10.875, 10.9, 10.925, 10.95, 10.975, 11, 11.025, 11.05, 11.075, 11.1, 11.125, 11.15, 11.175, 11.2, 11.225, 11.25, 11.275, 11.3, 11.325, 11.35, 11.375, 11.4, 11.425, 11.45, 11.475, 11.5, 11.525, 11.55, 11.575, 11.6, 11.625, 11.65, 11.675, 11.7, 11.725, 11.75, 11.775, 11.8, 11.825, 11.85, 11.875, 11.9, 11.925, 11.95, 11.975, 12, 12.025, 12.05, 12.075, 12.1, 12.125, 12.15, 12.175, 12.2, 12.225, 12.25, 12.275, 12.3, 12.325, 12.35, 12.375, 12.4, 12.425, 12.45, 12.475, 12.5, 12.525, 12.55, 12.575, 12.6, 12.625, 12.65, 12.675, 12.7, 12.725, 12.75, 12.775, 12.8, 12.825, 12.85, 12.875, 12.9, 12.925, 12.95, 12.975, 13, 13.025, 13.05, 13.075, 13.1, 13.125, 13.15, 13.175, 13.2, 13.225, 13.25, 13.275, 13.3, 13.325, 13.35, 13.375, 13.4, 13.425, 13.45, 13.475, 13.5, 13.525, 13.55, 13.575, 13.6, 13.625, 13.65, 13.675, 13.7, 13.725, 13.75, 13.775, 13.8, 13.825, 13.85, 13.875, 13.9, 13.925, 13.95, 13.975, 14, 14.025, 14.05, 14.075, 14.1, 14.125, 14.15, 14.175, 14.2, 14.225, 14.25, 14.275, 14.3, 14.325, 14.35, 14.375, 14.4, 14.425, 14.45, 14.475, 14.5, 14.525, 14.55, 14.575, 14.6, 14.625, 14.65, 14.675, 14.7, 14.725, 14.75, 14.775, 14.8, 14.825, 14.85, 14.875, 14.9, 14.925, 14.95, 14.975, 15];
medtronicRates = [0.025, 0.05, 0.075, 0.1, 0.125, 0.15, 0.175, 0.2, 0.225, 0.25, 0.275, 0.3, 0.325, 0.35, 0.375, 0.4, 0.425, 0.45, 0.475, 0.5, 0.525, 0.55, 0.575, 0.6, 0.625, 0.65, 0.675, 0.7, 0.725, 0.75, 0.775, 0.8, 0.825, 0.85, 0.875, 0.9, 0.925, 0.95, 0.975, 1, 1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45, 1.5, 1.55, 1.6, 1.65, 1.7, 1.75, 1.8, 1.85, 1.9, 1.95, 2, 2.05, 2.1, 2.15, 2.2, 2.25, 2.3, 2.35, 2.4, 2.45, 2.5, 2.55, 2.6, 2.65, 2.7, 2.75, 2.8, 2.85, 2.9, 2.95, 3, 3.05, 3.1, 3.15, 3.2, 3.25, 3.3, 3.35, 3.4, 3.45, 3.5, 3.55, 3.6, 3.65, 3.7, 3.75, 3.8, 3.85, 3.9, 3.95, 4, 4.05, 4.1, 4.15, 4.2, 4.25, 4.3, 4.35, 4.4, 4.45, 4.5, 4.55, 4.6, 4.65, 4.7, 4.75, 4.8, 4.85, 4.9, 4.95, 5, 5.05, 5.1, 5.15, 5.2, 5.25, 5.3, 5.35, 5.4, 5.45, 5.5, 5.55, 5.6, 5.65, 5.7, 5.75, 5.8, 5.85, 5.9, 5.95, 6, 6.05, 6.1, 6.15, 6.2, 6.25, 6.3, 6.35, 6.4, 6.45, 6.5, 6.55, 6.6, 6.65, 6.7, 6.75, 6.8, 6.85, 6.9, 6.95, 7, 7.05, 7.1, 7.15, 7.2, 7.25, 7.3, 7.35, 7.4, 7.45, 7.5, 7.55, 7.6, 7.65, 7.7, 7.75, 7.8, 7.85, 7.9, 7.95, 8, 8.05, 8.1, 8.15, 8.2, 8.25, 8.3, 8.35, 8.4, 8.45, 8.5, 8.55, 8.6, 8.65, 8.7, 8.75, 8.8, 8.85, 8.9, 8.95, 9, 9.05, 9.1, 9.15, 9.2, 9.25, 9.3, 9.35, 9.4, 9.45, 9.5, 9.55, 9.6, 9.65, 9.7, 9.75, 9.8, 9.85, 9.9, 9.95, 10, 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8, 10.9, 11, 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 11.7, 11.8, 11.9, 12, 12.1, 12.2, 12.3, 12.4, 12.5, 12.6, 12.7, 12.8, 12.9, 13, 13.1, 13.2, 13.3, 13.4, 13.5, 13.6, 13.7, 13.8, 13.9, 14, 14.1, 14.2, 14.3, 14.4, 14.5, 14.6, 14.7, 14.8, 14.9, 15];
accucheckInsightRates = [0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2, 0.21, 0.22, 0.23, 0.24, 0.25, 0.26, 0.27, 0.28, 0.29, 0.3, 0.31, 0.32, 0.33, 0.34, 0.35, 0.36, 0.37, 0.38, 0.39, 0.4, 0.41, 0.42, 0.43, 0.44, 0.45, 0.46, 0.47, 0.48, 0.49, 0.5, 0.51, 0.52, 0.53, 0.54, 0.55, 0.56, 0.57, 0.58, 0.59, 0.6, 0.61, 0.62, 0.63, 0.64, 0.65, 0.66, 0.67, 0.68, 0.69, 0.7, 0.71, 0.72, 0.73, 0.74, 0.75, 0.76, 0.77, 0.78, 0.79, 0.8, 0.81, 0.82, 0.83, 0.84, 0.85, 0.86, 0.87, 0.88, 0.89, 0.9, 0.91, 0.92, 0.93, 0.94, 0.95, 0.96, 0.97, 0.98, 0.99, 1, 1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45, 1.5, 1.55, 1.6, 1.65, 1.7, 1.75, 1.8, 1.85, 1.9, 1.95, 2, 2.05, 2.1, 2.15, 2.2, 2.25, 2.3, 2.35, 2.4, 2.45, 2.5, 2.55, 2.6, 2.65, 2.7, 2.75, 2.8, 2.85, 2.9, 2.95, 3, 3.05, 3.1, 3.15, 3.2, 3.25, 3.3, 3.35, 3.4, 3.45, 3.5, 3.55, 3.6, 3.65, 3.7, 3.75, 3.8, 3.85, 3.9, 3.95, 4, 4.05, 4.1, 4.15, 4.2, 4.25, 4.3, 4.35, 4.4, 4.45, 4.5, 4.55, 4.6, 4.65, 4.7, 4.75, 4.8, 4.85, 4.9, 4.95, 5, 5.05, 5.1, 5.15, 5.2, 5.25, 5.3, 5.35, 5.4, 5.45, 5.5, 5.55, 5.6, 5.65, 5.7, 5.75, 5.8, 5.85, 5.9, 5.95, 6, 6.05, 6.1, 6.15, 6.2, 6.25, 6.3, 6.35, 6.4, 6.45, 6.5, 6.55, 6.6, 6.65, 6.7, 6.75, 6.8, 6.85, 6.9, 6.95, 7, 7.05, 7.1, 7.15, 7.2, 7.25, 7.3, 7.35, 7.4, 7.45, 7.5, 7.55, 7.6, 7.65, 7.7, 7.75, 7.8, 7.85, 7.9, 7.95, 8, 8.05, 8.1, 8.15, 8.2, 8.25, 8.3, 8.35, 8.4, 8.45, 8.5, 8.55, 8.6, 8.65, 8.7, 8.75, 8.8, 8.85, 8.9, 8.95, 9, 9.05, 9.1, 9.15, 9.2, 9.25, 9.3, 9.35, 9.4, 9.45, 9.5, 9.55, 9.6, 9.65, 9.7, 9.75, 9.8, 9.85, 9.9, 9.95, 10, 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8, 10.9, 11, 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 11.7, 11.8, 11.9, 12, 12.1, 12.2, 12.3, 12.4, 12.5, 12.6, 12.7, 12.8, 12.9, 13, 13.1, 13.2, 13.3, 13.4, 13.5, 13.6, 13.7, 13.8, 13.9, 14, 14.1, 14.2, 14.3, 14.4, 14.5, 14.6, 14.7, 14.8, 14.9, 15];
accucheckSpiritRates = [0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2, 0.21, 0.22, 0.23, 0.24, 0.25, 0.26, 0.27, 0.28, 0.29, 0.3, 0.31, 0.32, 0.33, 0.34, 0.35, 0.36, 0.37, 0.38, 0.39, 0.4, 0.41, 0.42, 0.43, 0.44, 0.45, 0.46, 0.47, 0.48, 0.49, 0.5, 0.51, 0.52, 0.53, 0.54, 0.55, 0.56, 0.57, 0.58, 0.59, 0.6, 0.61, 0.62, 0.63, 0.64, 0.65, 0.66, 0.67, 0.68, 0.69, 0.7, 0.71, 0.72, 0.73, 0.74, 0.75, 0.76, 0.77, 0.78, 0.79, 0.8, 0.81, 0.82, 0.83, 0.84, 0.85, 0.86, 0.87, 0.88, 0.89, 0.9, 0.91, 0.92, 0.93, 0.94, 0.95, 0.96, 0.97, 0.98, 0.99, 1, 1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45, 1.5, 1.55, 1.6, 1.65, 1.7, 1.75, 1.8, 1.85, 1.9, 1.95, 2, 2.05, 2.1, 2.15, 2.2, 2.25, 2.3, 2.35, 2.4, 2.45, 2.5, 2.55, 2.6, 2.65, 2.7, 2.75, 2.8, 2.85, 2.9, 2.95, 3, 3.05, 3.1, 3.15, 3.2, 3.25, 3.3, 3.35, 3.4, 3.45, 3.5, 3.55, 3.6, 3.65, 3.7, 3.75, 3.8, 3.85, 3.9, 3.95, 4, 4.05, 4.1, 4.15, 4.2, 4.25, 4.3, 4.35, 4.4, 4.45, 4.5, 4.55, 4.6, 4.65, 4.7, 4.75, 4.8, 4.85, 4.9, 4.95, 5, 5.05, 5.1, 5.15, 5.2, 5.25, 5.3, 5.35, 5.4, 5.45, 5.5, 5.55, 5.6, 5.65, 5.7, 5.75, 5.8, 5.85, 5.9, 5.95, 6, 6.05, 6.1, 6.15, 6.2, 6.25, 6.3, 6.35, 6.4, 6.45, 6.5, 6.55, 6.6, 6.65, 6.7, 6.75, 6.8, 6.85, 6.9, 6.95, 7, 7.05, 7.1, 7.15, 7.2, 7.25, 7.3, 7.35, 7.4, 7.45, 7.5, 7.55, 7.6, 7.65, 7.7, 7.75, 7.8, 7.85, 7.9, 7.95, 8, 8.05, 8.1, 8.15, 8.2, 8.25, 8.3, 8.35, 8.4, 8.45, 8.5, 8.55, 8.6, 8.65, 8.7, 8.75, 8.8, 8.85, 8.9, 8.95, 9, 9.05, 9.1, 9.15, 9.2, 9.25, 9.3, 9.35, 9.4, 9.45, 9.5, 9.55, 9.6, 9.65, 9.7, 9.75, 9.8, 9.85, 9.9, 9.95, 10, 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8, 10.9, 11, 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 11.7, 11.8, 11.9, 12, 12.1, 12.2, 12.3, 12.4, 12.5, 12.6, 12.7, 12.8, 12.9, 13, 13.1, 13.2, 13.3, 13.4, 13.5, 13.6, 13.7, 13.8, 13.9, 14, 14.1, 14.2, 14.3, 14.4, 14.5, 14.6, 14.7, 14.8, 14.9, 15];
omniPodRates = [0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1, 1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45, 1.5, 1.55, 1.6, 1.65, 1.7, 1.75, 1.8, 1.85, 1.9, 1.95, 2, 2.05, 2.1, 2.15, 2.2, 2.25, 2.3, 2.35, 2.4, 2.45, 2.5, 2.55, 2.6, 2.65, 2.7, 2.75, 2.8, 2.85, 2.9, 2.95, 3, 3.05, 3.1, 3.15, 3.2, 3.25, 3.3, 3.35, 3.4, 3.45, 3.5, 3.55, 3.6, 3.65, 3.7, 3.75, 3.8, 3.85, 3.9, 3.95, 4, 4.05, 4.1, 4.15, 4.2, 4.25, 4.3, 4.35, 4.4, 4.45, 4.5, 4.55, 4.6, 4.65, 4.7, 4.75, 4.8, 4.85, 4.9, 4.95, 5, 5.05, 5.1, 5.15, 5.2, 5.25, 5.3, 5.35, 5.4, 5.45, 5.5, 5.55, 5.6, 5.65, 5.7, 5.75, 5.8, 5.85, 5.9, 5.95, 6, 6.05, 6.1, 6.15, 6.2, 6.25, 6.3, 6.35, 6.4, 6.45, 6.5, 6.55, 6.6, 6.65, 6.7, 6.75, 6.8, 6.85, 6.9, 6.95, 7, 7.05, 7.1, 7.15, 7.2, 7.25, 7.3, 7.35, 7.4, 7.45, 7.5, 7.55, 7.6, 7.65, 7.7, 7.75, 7.8, 7.85, 7.9, 7.95, 8, 8.05, 8.1, 8.15, 8.2, 8.25, 8.3, 8.35, 8.4, 8.45, 8.5, 8.55, 8.6, 8.65, 8.7, 8.75, 8.8, 8.85, 8.9, 8.95, 9, 9.05, 9.1, 9.15, 9.2, 9.25, 9.3, 9.35, 9.4, 9.45, 9.5, 9.55, 9.6, 9.65, 9.7, 9.75, 9.8, 9.85, 9.9, 9.95, 10, 10.05, 10.1, 10.15, 10.2, 10.25, 10.3, 10.35, 10.4, 10.45, 10.5, 10.55, 10.6, 10.65, 10.7, 10.75, 10.8, 10.85, 10.9, 10.95, 11, 11.05, 11.1, 11.15, 11.2, 11.25, 11.3, 11.35, 11.4, 11.45, 11.5, 11.55, 11.6, 11.65, 11.7, 11.75, 11.8, 11.85, 11.9, 11.95, 12, 12.05, 12.1, 12.15, 12.2, 12.25, 12.3, 12.35, 12.4, 12.45, 12.5, 12.55, 12.6, 12.65, 12.7, 12.75, 12.8, 12.85, 12.9, 12.95, 13, 13.05, 13.1, 13.15, 13.2, 13.25, 13.3, 13.35, 13.4, 13.45, 13.5, 13.55, 13.6, 13.65, 13.7, 13.75, 13.8, 13.85, 13.9, 13.95, 14, 14.05, 14.1, 14.15, 14.2, 14.25, 14.3, 14.35, 14.4, 14.45, 14.5, 14.55, 14.6, 14.65, 14.7, 14.75, 14.8, 14.85, 14.9, 14.95, 15];
danaRates = [0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2, 0.21, 0.22, 0.23, 0.24, 0.25, 0.26, 0.27, 0.28, 0.29, 0.3, 0.31, 0.32, 0.33, 0.34, 0.35, 0.36, 0.37, 0.38, 0.39, 0.4, 0.41, 0.42, 0.43, 0.44, 0.45, 0.46, 0.47, 0.48, 0.49, 0.5, 0.51, 0.52, 0.53, 0.54, 0.55, 0.56, 0.57, 0.58, 0.59, 0.6, 0.61, 0.62, 0.63, 0.64, 0.65, 0.66, 0.67, 0.68, 0.69, 0.7, 0.71, 0.72, 0.73, 0.74, 0.75, 0.76, 0.77, 0.78, 0.79, 0.8, 0.81, 0.82, 0.83, 0.84, 0.85, 0.86, 0.87, 0.88, 0.89, 0.9, 0.91, 0.92, 0.93, 0.94, 0.95, 0.96, 0.97, 0.98, 0.99, 1, 1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45, 1.5, 1.55, 1.6, 1.65, 1.7, 1.75, 1.8, 1.85, 1.9, 1.95, 2, 2.05, 2.1, 2.15, 2.2, 2.25, 2.3, 2.35, 2.4, 2.45, 2.5, 2.55, 2.6, 2.65, 2.7, 2.75, 2.8, 2.85, 2.9, 2.95, 3, 3.05, 3.1, 3.15, 3.2, 3.25, 3.3, 3.35, 3.4, 3.45, 3.5, 3.55, 3.6, 3.65, 3.7, 3.75, 3.8, 3.85, 3.9, 3.95, 4, 4.05, 4.1, 4.15, 4.2, 4.25, 4.3, 4.35, 4.4, 4.45, 4.5, 4.55, 4.6, 4.65, 4.7, 4.75, 4.8, 4.85, 4.9, 4.95, 5, 5.05, 5.1, 5.15, 5.2, 5.25, 5.3, 5.35, 5.4, 5.45, 5.5, 5.55, 5.6, 5.65, 5.7, 5.75, 5.8, 5.85, 5.9, 5.95, 6, 6.05, 6.1, 6.15, 6.2, 6.25, 6.3, 6.35, 6.4, 6.45, 6.5, 6.55, 6.6, 6.65, 6.7, 6.75, 6.8, 6.85, 6.9, 6.95, 7, 7.05, 7.1, 7.15, 7.2, 7.25, 7.3, 7.35, 7.4, 7.45, 7.5, 7.55, 7.6, 7.65, 7.7, 7.75, 7.8, 7.85, 7.9, 7.95, 8, 8.05, 8.1, 8.15, 8.2, 8.25, 8.3, 8.35, 8.4, 8.45, 8.5, 8.55, 8.6, 8.65, 8.7, 8.75, 8.8, 8.85, 8.9, 8.95, 9, 9.05, 9.1, 9.15, 9.2, 9.25, 9.3, 9.35, 9.4, 9.45, 9.5, 9.55, 9.6, 9.65, 9.7, 9.75, 9.8, 9.85, 9.9, 9.95, 10, 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8, 10.9, 11, 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 11.7, 11.8, 11.9, 12, 12.1, 12.2, 12.3, 12.4, 12.5, 12.6, 12.7, 12.8, 12.9, 13, 13.1, 13.2, 13.3, 13.4, 13.5, 13.6, 13.7, 13.8, 13.9, 14, 14.1, 14.2, 14.3, 14.4, 14.5, 14.6, 14.7, 14.8, 14.9, 15];
cellnovoRates = [0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1, 1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45, 1.5, 1.55, 1.6, 1.65, 1.7, 1.75, 1.8, 1.85, 1.9, 1.95, 2, 2.05, 2.1, 2.15, 2.2, 2.25, 2.3, 2.35, 2.4, 2.45, 2.5, 2.55, 2.6, 2.65, 2.7, 2.75, 2.8, 2.85, 2.9, 2.95, 3, 3.05, 3.1, 3.15, 3.2, 3.25, 3.3, 3.35, 3.4, 3.45, 3.5, 3.55, 3.6, 3.65, 3.7, 3.75, 3.8, 3.85, 3.9, 3.95, 4, 4.05, 4.1, 4.15, 4.2, 4.25, 4.3, 4.35, 4.4, 4.45, 4.5, 4.55, 4.6, 4.65, 4.7, 4.75, 4.8, 4.85, 4.9, 4.95, 5];

timeHours = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];
quarterHourlyIntervals = ['00','15','30','45'];
hourlyIntervals = ['00'];
halfHourlyIntervals = ['00', '30'];

pumpChoices = ["Accu-Chek® Spirit Combo (Roche)", "Accu-Chek® Insight (Roche)", "Animas® Vibe ™ (© Animas)", "Paradigm® Veo™ (Medtronic)", "MiniMed 640G (Medtronic)", "Omnipod (Ypsomed Ltd)", "Cellnovo (Cellnovo)"];

temporaryRates = [];

//Cellnovo (Cellnovo): Basal flow rate from 0.05U/ h to 5.0 U/h adjustable in 0.05u increments, programmed in hour by hour time blocks over 24hr period.
//DANA Diabecare R (Advanced Therapeutics (UK) Ltd) Min: 0.04u/h Max: 16U/h Minimum increment 0.01U/h
//Omnipod (Ypsomed Ltd) PDM can store up to 7 basal programmes; of which each contains 24 rates programmed in half hour increments -Max basal rate 30U/hr Basal rate increment 0.05U/hr
//MiniMed 640G (Medtronic) Basal rates from 0.025 U/hr; adjust by increments of 0.025 U/h, Max: 35 U/h
//Paradigm® Veo™ (Medtronic)** Basal rates from 0.025 U/hr; max: 35 U/h in increments of 0.025 U/h
//Animas® Vibe ™ (© Animas) -Basal flow rate range: 0.025U/hr to max of 25U/hr, in increments of 0.025U
//Accu-Chek® Insight (Roche) Min: 0.02 U/h; Max: 25 U/h -1 to 24 hr basal rates, duraton adjustable in units of 15 min, and in increments of 0.01 (up to 1.00 U/h), 0.05 (up to 10.0 U/h) and 0.1 (up to 50.0 U/h).
//Accu-Chek® Spirit Combo (Roche) Min: 0.05U/h Max:50U/h -24 hourly basal rates, adjustable in unit increments of 0.01 (up to 1.00 U/h), 0.05 (up to 10.0 U/h) and 0.1 (up to 50.0 U/h).

Template.insulin.created = function () {

    if (temporaryRates.length > 0) {
      // this is only true is new pump has been set up
      var selectedarray = [];
      Session.set('timeblock', temporaryRates);
      Session.set('selectedTimeBlocks', selectedarray);
      temporaryRates = []; //reset array

    } else {
      var firstBlock = new TimeBlock();
      firstBlock.timeblock = 0;
      firstBlock.rate = 0.025;
      firstBlock.starthours = "00";
      firstBlock.startminutes = "00";
      firstBlock.stophours = "01";
      firstBlock.stopminutes = "00";
      var timeblockarray = [];
      var selectedarray = [];
      timeblockarray[0] = firstBlock;
      Session.set('timeblock', timeblockarray);
      Session.set('selectedTimeBlocks', selectedarray);
      Session.set('weight', 0);
      Session.set('totalHours', 0);
      Session.set('totalUnits', 0);

      Session.set('pumpChoice', 'MiniMed 640G (Medtronic)');
      Session.set('pumpChoices', medtronicRates);
      Session.set('timeIntervals', halfHourlyIntervals);
    }



};


Template.insulin.events({
  'click #insulinAdd': function(event, template){
    event.preventDefault();

    //get selected timeblock
    var events = Session.get('timeblock');
    var timeblockselected = this.thistimeblock.timeblock

    currentTimeBlock = events[timeblockselected];

    //create new time block - previous time block stop time = start time of this, add one hour for stop

    var nextTimeBlock = new TimeBlock();
    nextTimeBlock.timeblock = parseInt(timeblockselected) + 1;
    nextTimeBlock.starthours = currentTimeBlock.stophours;
    nextTimeBlock.startminutes = currentTimeBlock.stopminutes;
    var nextHours = parseInt(nextTimeBlock.starthours) + 1;
    nextTimeBlock.stophours = addZeroAndStringifyIfUnderTen(nextHours);
    nextTimeBlock.stopminutes = '00';

    nextTimeBlock.rate = 0.025;
    var next = parseInt(timeblockselected)+1;
    events[next] = nextTimeBlock;
    Session.set('timeblock', events);
  },
  'click #insulinDelete': function(event, template){
    event.preventDefault();
    var timeBlockToRemoveID = this.thistimeblock.timeblock;
    var events = Session.get('timeblock');
    var timeBlockToRemove = events[timeBlockToRemoveID];
    startHoursOfTimeBlockToRemove = timeBlockToRemove.starthours;
    startMinutesOfTimeBlockToRemove = timeBlockToRemove.startminutes;

    events.splice(timeBlockToRemoveID, 1);

    var nextInSequence = parseInt(timeBlockToRemoveID)+1;
    for (var i = timeBlockToRemoveID; i < events.length; i++) {
      var newEvent = events[i];
      if (i==timeBlockToRemoveID) {
        newEvent.starthours = timeBlockToRemove.starthours;
        newEvent.startminutes = timeBlockToRemove.startminutes;
      }
      newEvent.timeblock = i;
      events[i] = newEvent;
    }

    Session.set('timeblock', events);
  },
  'click #increase10': function(){
    event.preventDefault();
    var myblock = this.thistimeblock.timeblock;
    var timeblocks = Session.get('timeblock');
    var rates = Session.get('pumpChoices');
    var newRate = (((this.thistimeblock.rate)*(110))/100).toFixed(3);
    var rateToReturn = closest(rates, newRate);
    timeblocks[myblock].rate = "" + rateToReturn;
    Session.set('timeblock', timeblocks);
  },
  'click #decrease10': function(){
    event.preventDefault();
    var myblock = this.thistimeblock.timeblock;
    var timeblocks = Session.get('timeblock');
    var rates = Session.get('pumpChoices');
    var newRate = (((this.thistimeblock.rate)*(90))/100).toFixed(3);
    var rateToReturn = closest(rates, newRate);
    timeblocks[myblock].rate = "" + rateToReturn;
    Session.set('timeblock', timeblocks);
  },
  'click #mergetimeblocks': function(){
    event.preventDefault();
    var selectedTimeBlocks = Session.get('selectedTimeBlocks');
    var timeblocks = Session.get('timeblock');

    var numberOfSelectedBlocks = selectedTimeBlocks.length;
    if (numberOfSelectedBlocks == 1) {
      //cannot merge only one block
      console.log('cannot merge only one block');
      return;
    }

    var firstSelectedBlockID = selectedTimeBlocks[0];
    var finalTimeBlockID = selectedTimeBlocks[numberOfSelectedBlocks-1];

    var starthours = timeblocks[firstSelectedBlockID].starthours;
    var startminutes = timeblocks[firstSelectedBlockID].startminutes;

    var stophours = timeblocks[finalTimeBlockID].stophours;
    var stopminutes = timeblocks[finalTimeBlockID].stopminutes;

    var hours = 0;
    var units = 0;

    for (var i = 0; i < selectedTimeBlocks.length; i++) {
      var thisTimeBlockID = selectedTimeBlocks[i];
      var thisTimeBlock = timeblocks[thisTimeBlockID];
      var thisHours = totalHours(thisTimeBlock);
      hours += thisHours;
      var allUnits = totalUnits(thisHours, thisTimeBlock);
      units += parseFloat(allUnits);
      if (i != 0) {
        timeblocks.splice(thisTimeBlockID, 1);
      }
    }
    var newRate = (units/hours).toFixed(3);

    if (hours % 1 == 0) {
      // this is an integer
      var endtime = 0;
      endtime = parseInt(hours) + parseInt(starthours);

      timeblocks[firstSelectedBlockID].stophours = addZeroAndStringifyIfUnderTen(endtime);
      timeblocks[firstSelectedBlockID].stopminutes = "00";

    } else {
      var remainder = hours % 1;
      var myhours = hours - remainder;
      var endhours = parseInt(myhours) + parseInt(starthours);
      var remainderMinutes= remainder*60;
      if (remainderMinutes < 15) {
        remainder = '00';
      }
      if (remainderMinutes >= 15 && remainderMinutes < 30) {
        remainder = '15';
      }
      if (remainderMinutes >= 30 && remainderMinutes < 45) {
        remainder = '30';
      }
      if (remainderMinutes >= 45 && remainderMinutes < 60) {
        remainder = '45';
      }

      timeblocks[firstSelectedBlockID].stophours = myhours;
      timeblocks[firstSelectedBlockID].stopminutes = remainder;
    }
    var rateToReturn = closest(medtronicRates, newRate);
    timeblocks[firstSelectedBlockID].rate = rateToReturn;

    var nextBlockAddress = firstSelectedBlockID + (numberOfSelectedBlocks);

    ///change ids of subsequent blocks & match up start times
    for (var j = firstSelectedBlockID; j < timeblocks.length; j++) {
      timeblocks[j].timeblock = j;
      if (j != firstSelectedBlockID) {
        var newhours = timeblocks[j-1].stophours;
        var newminutes = timeblocks[j-1].stopminutes;
        timeblocks[j].starthours = newhours;
        timeblocks[j].startminutes = newminutes;
      }
    }

    /// wrap up
    selectedTimeBlocks = [];
    Session.set('selectedTimeBlocks', selectedTimeBlocks);
    Session.set('timeblock', timeblocks);

  },
  'submit #schedule': function(){
    event.preventDefault();
    var weight = event.target.weight.value;
    Session.set('weight', weight);
  },
  'change #pumpChoice': function(){
      Session.set('pumpChoice', event.target.value);
      matchRatesTo(event.target.value);
  }

});

Template.insulin.helpers({
  timeblocks: function(){
    return Session.get('timeblock');
  },
  totalBasalRate: function(){
    var timeblocks = Session.get('timeblock');
    var totalinsulin = 0;
    for (var i = 0; i < timeblocks.length; i++) {
      var thistimeblock = timeblocks[i];
      var thisBlocksHours = totalHours(thistimeblock);
      var thisBlocksInsulin = totalUnits(thisBlocksHours, thistimeblock);
      totalinsulin += parseFloat(thisBlocksInsulin);
    }
    Session.set('totalUnits', totalinsulin.toFixed(3));
    return totalinsulin.toFixed(3);
  },
  totalHoursUsed: function(){
    var timeblocks = Session.get('timeblock');
    var totalhours = 0;
    for (var i = 0; i < timeblocks.length; i++) {
      var thistimeblock = timeblocks[i];
      var thisBlocksHours = totalHours(thistimeblock);
      totalhours += parseFloat(thisBlocksHours);
    }
    Session.set('totalHours', totalhours);
    return totalhours.toFixed(1);
  },
  selectedTotalUnits: function(){
    var timeblocks = Session.get('timeblock');
    var selectedTimeBlocks = Session.get('selectedTimeBlocks');
    var totalinsulin = 0;
    if (selectedTimeBlocks.length > 0) {
      for (var i = 0; i < selectedTimeBlocks.length; i++) {
        var selectedTimeBlock = selectedTimeBlocks[i];
        var timeblock = timeblocks[selectedTimeBlock];
        var hours = totalHours(timeblock);
        var insulin = totalUnits(hours, timeblock);
        totalinsulin += parseFloat(insulin);
      }
    }
    return totalinsulin.toFixed(3);
  },
  selectedTotalHours: function(){
    var timeblocks = Session.get('timeblock');
    var selectedTimeBlocks = Session.get('selectedTimeBlocks');
    var totalhours = 0;
    if (selectedTimeBlocks.length > 0) {
      for (var i = 0; i < selectedTimeBlocks.length; i++) {
        var selectedTimeBlock = selectedTimeBlocks[i];
        var timeblock = timeblocks[selectedTimeBlock];
        var hours = totalHours(timeblock);
        totalhours += parseFloat(hours);

      }
    }
    Session.set('totalHours', totalhours.toFixed(1));
    return totalhours.toFixed(1);
  },
  isVisible: function(){
    var selectedBlocks = Session.get('selectedTimeBlocks');
    if ( selectedBlocks.length > 0) {
      return true;
    } else {
      return false;
    }
  },
  thereAreMoreThanTwoBlocks: function(){
    var selectedBlocks = Session.get('selectedTimeBlocks');
    if (selectedBlocks.length > 1) {
      return true;
    } else {
      return false;
    }
  },
  weightIsEntered: function(){
    var weight = Session.get('weight');
    if (weight > 0) {
      return true;
    } else {
      return false;
    }
  },
  weightClass: function(){
    var weight = Session.get('weight');
    if (weight > 0) {
      return 'weightRow';
    } else {
      return 'noWeightRow';
    }
  },
  totalBasalRatePerKg: function(){
    var weight = Session.get('weight');
    var totalInsulin = Session.get('totalUnits');
    var totalHours = Session.get('totalHours');
    return (totalInsulin/weight).toFixed(1);
  },
  selectedPump: function(parameter){
    var selectedPump = Session.get('pumpChoice');
    if (selectedPump == parameter) {
      return "selected";
    } else {
      return "";
    }
  },
  pumps: function(){
    return pumpChoices;
  }
});

Template.newpump.helpers({
  pumps: function(){
    return pumpChoices;
  },
  timeIntervals: function(){
    var pumpChoice = Session.get('pumpChoice');
    return timeIntervals(pumpChoice);
  },
  hours: function(){
    return timeHours;
  },
  disabled: function(timeInterval){

    if (timeInterval == "00" || timeInterval == "01" || timeInterval == "02" || timeInterval == "03" || timeInterval == "04") {
      return 'disabled';
    } else {
      return '';
    }
  },
  disabledbed: function(hour){
    if (hour == "00") {
      return 'disabled';
    } else {
      return '';
    }
  },
  selectedPump: function(parameter){
    var selectedPump = Session.get('pumpChoice');
    if (selectedPump == parameter) {
      return "selected";
    } else {
      return "";
    }
  }
});

Template.newpump.created = function(){
  var pump = Session.get('pumpChoice');
  var selectedarray = [];
  var timeblockarray = [];  
  Session.set('timeblock', timeblockarray);
  Session.set('selectedTimeBlocks', selectedarray);
  Session.set('weight', 0);
  Session.set('totalHours', 0);
  Session.set('totalUnits', 0);
  if (pump === undefined ) {
    Session.set('pumpChoice', 'MiniMed 640G (Medtronic)');
    Session.set('pumpChoices', medtronicRates);
    Session.set('timeIntervals', halfHourlyIntervals);
  }


};

Template.newpump.events({
  'change #age': function(){
    Session.set('age', event.target.value);
  },
  'change #pumpChoice': function(){
    Session.set('pumpChoice', event.target.value);
  },
  'submit #newPump': function(){
    event.preventDefault();
    var age = event.target.age.value;
    var tdd = event.target.tdd.value;
    var tbr = event.target.totalbasal.value;
    var pumpChoice = event.target.pumpChoice.value;

    if (tdd === "" || tbr === "") {
      return;
    }

    var bfHours = event.target.breakfasthours.value;
    var bfMinutes = event.target.breakfastminutes.value;
    var lunchHours = event.target.lunchhours.value;
    var lunchMinutes = event.target.lunchminutes.value;
    var teaHours = event.target.teahours.value;
    var teaMinutes = event.target.teaminutes.value;
    var bedHours = event.target.bedhours.value;
    var bedMinutes = event.target.bedminutes.value;
    var timeblockarray = createNewPumpProfile(age, tdd, tbr, pumpChoice, bfHours, bfMinutes, lunchHours, lunchMinutes, teaHours, teaMinutes, bedHours, bedMinutes);

    var timeblocks = Session.get('timeblock');
    timeblocks = timeblockarray;
    temporaryRates = timeblocks;

    FlowRouter.go('/insulin', {
      'timeblock': timeblocks
    });

  }
});

Template.datesEntry.helpers({

  rates: function(){
    var rates = Session.get('pumpChoices');
    return rates;
  },

  hours: function(){
    return timeHours;
  },

  doDatesMatch: function(){

    var timeblockId = this.thistimeblock.timeblock;
    var timeblocks = Session.get('timeblock');
    var numberOfTimeBlocks = timeblocks.length;

    var starthours = parseInt(this.thistimeblock.starthours);
    var startminutes = parseInt(this.thistimeblock.startminutes);
    var stophours = parseInt(this.thistimeblock.stophours);
    var stopminutes = parseInt(this.thistimeblock.stopminutes);

    if (stopminutes == "00") {
      stopminutes = 0;
    }
    if (startminutes == '00') {
      startminutes = 0;
    }
    if (starthours == "00") {
      starthours = 0;
    }
    if (stophours == '00') {
      stophours = 0;
    }

    if (numberOfTimeBlocks>1) {
      //check for consistency between start and end of blocksArray
      if (timeblockId > 0) {
        // test block before
        var previousBlock = timeblocks[timeblockId-1];

        if (previousBlock.stophours != starthours || parseInt(previousBlock.stopminutes) != startminutes) {
          return 'pickerRed';
        }
        /*
        if (timeblockId < numberOfTimeBlocks-1) {
          //there are timeblocks after mine
          var nextBlock = timeblocks[timeblockId +1];
          if (nextBlock.starthours != stophours || parseInt(nextBlock.startminutes)!= stopminutes) {
              return 'pickerRed';
          }
        }
        */
      }
    }
    if (starthours > stophours) {

      return 'pickerRed';
    } else {
      return 'picker';
    }
  },

  isLastPicker: function(timeblock){

    var blocksArray = Session.get('timeblock');
    var numberInArray = blocksArray.length;
    if (parseInt(timeblock) == numberInArray-1) {
      return true;
    } else {
      return false;
    }

  },
  isSelected: function(parameter, picker){

    var timetocompare = "";

    if (picker == 'timefromHours') {
      timetocompare = this.thistimeblock.starthours;
    } else if (picker == 'timefromMinutes') {
      timetocompare = this.thistimeblock.startminutes;
    } else if (picker == 'timetoHours') {
      timetocompare = this.thistimeblock.stophours;
    } else if (picker == 'timetoMinutes') {
      timetocompare = this.thistimeblock.stopminutes
    }

    if (timetocompare == parameter) {

      return 'selected';
    } else {
      return '';
    }
  },
  isSelectedRate: function(parameter){
    var rateToCompare= this.thistimeblock.rate;

    if (rateToCompare==parameter) {

      return 'selected';
    } else {
      return '';
    }
  },
  calculateTotalHours: function(){
    var totalhours = totalHours(this.thistimeblock);
    return totalhours;
  },
  calculateTotalUnits: function(hours){
    var totalunits = totalUnits(hours, this.thistimeblock);
    return totalunits;
  },
  isChecked: function(){
    var selectedBlocks = Session.get('selectedTimeBlocks');
    if (selectedBlocks.length > 0) {

      var i = selectedBlocks.indexOf(this.thistimeblock.timeblock);
      if (i != -1) {
        return 'checked';
      } else {
        return ''
      }
    }
  },
  isFirstBlock: function(){
    if (this.thistimeblock.timeblock == 0) {
      return true;
    } else {
      return false;
    }
  },
  timeIntervals: function(){
    var pumpChoice = Session.get('pumpChoice');
    return timeIntervals(pumpChoice);
  }
});

Template.datesEntry.events({

  'change .picker': function (){
    pickerChange(event);
  },
  'change .pickerRed': function(){
    pickerChange(event);
  },
  'change #rate': function(){
    var rateSelected = parseFloat(event.target.value);
    var blockSelected = parseInt(event.target.name);
    var blocks = Session.get('timeblock');
    var blockToChange = new TimeBlock();
    blockToChange = this.thistimeblock;
    blockToChange.rate = rateSelected;
    blocks[blockSelected] = blockToChange;
    Session.set('timeblock', blocks);
  },
  'change #timeblockSelect': function(){

    var selectedBlocks = Session.get('selectedTimeBlocks');

    if(event.target.checked){
      selectedBlocks.push(this.thistimeblock.timeblock);
      Session.set('selectedTimeBlocks', selectedBlocks);
    } else {
      if (selectedBlocks.length > 0) {
        var i = selectedBlocks.indexOf(this.thistimeblock.timeblock);
        if (i != -1) {
          selectedBlocks.splice(i, 1);
          Session.set('selectedTimeBlocks', selectedBlocks);
        }
      }
    }
  }
});


//////////////////////// functions

function pickerChange(event){
  var timetoevent = event.target.value;
  var timeblock = event.target.name;

  var timeblocks = Session.get('timeblock');
  var timeblocktoupdate = new TimeBlock();

  timeblocktoupdate = timeblocks[timeblock];

  var pickerId = event.target.id;

  if (pickerId == 'timefromhourpicker') {
    timeblocktoupdate.starthours = timetoevent;
  }
  if (pickerId == 'timefromminutepicker') {
    timeblocktoupdate.startminutes = timetoevent;
  }
  if (pickerId == 'timetohourpicker') {
    timeblocktoupdate.stophours = timetoevent;
  }
  if (pickerId == 'timetominutepicker') {
    timeblocktoupdate.stopminutes = timetoevent;
  }

  timeblocks[timeblock] = timeblocktoupdate;

  Session.set('timeblock', timeblocks);

  //will this update affect blocks that follow?

  if (timeblocks.length > (parseInt(timeblock)+1)) {

    checkThisTimeBlockDoesNotEndAfterNext(timeblocks, timeblocktoupdate);
  }
}


function checkThisTimeBlockDoesNotEndAfterNext (allblocks, myblock){
  var numberOfBlocksAfterMe = allblocks.length - (parseInt(myblock.timeblock) + 1);

  //test next block
  var stophours = parseInt(myblock.stophours);
  var stopminutes = parseInt(myblock.stopminutes);
  var arrayaddress = myblock.timeblock;

  var nextBlock = new TimeBlock;
  nextBlock = allblocks[arrayaddress+1];
  var nextstarthours = parseInt(nextBlock.starthours);
  var nextstartminutes = parseInt(nextBlock.startminutes);

  if (nextstarthours != stophours || nextstartminutes != stopminutes) {

    //end of selected block is after beginning of next block
    //reset start of next time block to new time

    nextBlock.starthours = addZeroAndStringifyIfUnderTen(stophours);
    nextBlock.startminutes = addZeroAndStringifyIfUnderTen(stopminutes);
    nextBlock.stophours = addZeroAndStringifyIfUnderTen(stophours+1);
    nextBlock.stopminutes = addZeroAndStringifyIfUnderTen(stopminutes);
    var nextBlockArrayAddress = arrayaddress + 1;
    nextBlock.timeblock = nextBlockArrayAddress;
    allblocks[nextBlockArrayAddress] = nextBlock;
    if (numberOfBlocksAfterMe > 1) {
      //there is more than one block affected - loop through and alter

      var subsequentBlock = new TimeBlock();
      var lastBlock = new TimeBlock();
      lastBlock = nextBlock;
      for (var i = 1; i < numberOfBlocksAfterMe; i++) {
        var subsequentBlockArrayAddress = (parseInt(lastBlock.timeblock)) + 1;
        subsequentBlock = allblocks[subsequentBlockArrayAddress];
        subsequentBlock.starthours = lastBlock.stophours;
        subsequentBlock.startminutes = lastBlock.stopminutes
        var addAnHour = (parseInt(subsequentBlock.starthours))+1;

        subsequentBlock.stophours = addZeroAndStringifyIfUnderTen(addAnHour);
        subsequentBlock.stopminutes = lastBlock.stopminutes;

        allblocks[subsequentBlockArrayAddress] = subsequentBlock;

        lastBlock = subsequentBlock;
      }
    }
    Session.set('timeblock', allblocks);
  }
}

function convertToDecimalAndStringify(numberToAmend){
  if (isInt(numberToAmend) ) {
    console.log('i am a number');
  }
}

function isInt(value) {
  return !isNaN(value) &&
         parseInt(Number(value)) == value &&
         !isNaN(parseInt(value, 10));
}

function addZeroAndStringifyIfUnderTen(numberToAmend){
  var stringNumber = '';
  if (numberToAmend < 10) {
    stringNumber = '0'+numberToAmend;
  } else {
    stringNumber = ''+numberToAmend;
  }
  return stringNumber;
}

function closest(array,num){
    var i=0;
    var minDiff=1000;
    var ans;
    for(i in array){
         var m=Math.abs(num-array[i]);
         if(m<minDiff){
                minDiff=m;
                ans=array[i];
            }
      }
    return ans;
}

function totalHours(timeblock){
  var rate = timeblock.rate;
  var starthours = timeblock.starthours;
  var startminutes = timeblock.startminutes;
  var stophours = timeblock.stophours;
  var stopminutes = timeblock.stopminutes;
  if (stopminutes == "00") {
    stopminutes = 0;
  }
  if (startminutes == '00') {
    startminutes = 0;
  }

  var totalMinutes = stopminutes - startminutes;
  var totalhours = (stophours - starthours)+(totalMinutes/60);

  return totalhours;
}

function totalUnits(hours, timeblock){
  var rate = timeblock.rate;
  var totalinsulin = (rate * hours).toFixed(3);

  return totalinsulin;
}

function matchRatesTo(chosenPump){
  var chosenRate = [];
  if (chosenPump == "Accu-Chek® Spirit Combo (Roche)") {
    chosenRate = accucheckSpiritRates;
  }
  if (chosenPump == "Accu-Chek® Insight (Roche)") {
    chosenRate = accucheckInsightRates;
  }
  if (chosenPump == "Animas® Vibe ™ (© Animas)") {
    chosenRate = animasRates;
  }
  if (chosenPump == "Paradigm® Veo™ (Medtronic)" || chosenPump == "MiniMed 640G (Medtronic)") {
    chosenRate = medtronicRates;
  }
  if (chosenPump == "Omnipod (Ypsomed Ltd)") {
    chosenRate = omniPodRates;
  }
  if (chosenPump == "Cellnovo (Cellnovo)") {
    chosenRate = cellnovoRates;
  }
  Session.set('pumpChoices', chosenRate);
}

function timeIntervals(chosenPump){

  var timeIntervals = [];
  var basalProfileNumber =  0;
  if (chosenPump == "Accu-Chek® Spirit Combo (Roche)") {
    timeIntervals = hourlyIntervals;
    basalProfileNumber = 5;
  }
  if (chosenPump == "Accu-Chek® Insight (Roche)") {
    timeIntervals = quarterHourlyIntervals;
    basalProfileNumber = 5;

  }
  if (chosenPump == "Animas® Vibe ™ (© Animas)") {
    timeIntervals = halfHourlyIntervals;
    basalProfileNumber = 12;

  }
  if (chosenPump == "Paradigm® Veo™ (Medtronic)" || chosenPump == "MiniMed 640G (Medtronic)") {
    timeIntervals = halfHourlyIntervals ;
    basalProfileNumber = 48;
  }
  if (chosenPump == "Omnipod (Ypsomed Ltd)") {
    timeIntervals = halfHourlyIntervals;
    basalProfileNumber = 24;
  }
  if (chosenPump == "Cellnovo (Cellnovo)") {
    timeIntervals = hourlyIntervals;
    basalProfileNumber = 20;
  }

  return timeIntervals;
}

function createNewPumpProfile(age, tdd, tbr, pumpChoice, bfHours, bfMinutes, lunchHours, lunchMinutes, teaHours, teaMinutes, bedHours, bedMinutes){
  // Bill Lambs algorithm here
  var pumpTDD = 0;
  var block0004 = 0; //only adults
  var block00bf = 0; //only children
  var block04bf = 0;
  var blockbflunch = 0;
  var blocklunchtea = 0;
  var blockteabed = 0;
  var blockbed24 = 0;

  var timeblockarray = [];

  //set basal based on age

  if (age == 'Pre-School') {
    pumpTDD = tdd * 0.95;
  }
  if (age == 'Pre-Teen') {
    pumpTDD = tdd * 0.85;
  }
  if (age == 'Standard') {
    pumpTDD = tdd * 0.75;
  }
  if (age == 'Adult') {
    pumpTDD = tdd * 0.75;
  }

  var intervals = Session.get('pumpChoices');

  var basalDose = (pumpTDD / 2)/24;

  // set time blocks based on age and calculated basal

  if (age == 'Pre-School') {
    var block00bf = basalDose * 0.8;
    var blockbflunch = basalDose * 1.1;
    var blocklunchtea = basalDose;
    var blockteabed = basalDose;
    var blockbed24 = basalDose * 0.9;
  }
  if (age == 'Pre-Teen') {
    var block00bf = basalDose * 0.8;
    var blockbflunch = basalDose * 1.15;
    var blocklunchtea = basalDose;
    var blockteabed = basalDose * 1.1;
    var blockbed24 = basalDose * 0.9;
  }
  if (age == 'Standard') {
    var block00bf = basalDose * 0.8;
    var blockbflunch = basalDose * 1.2;
    var blocklunchtea = basalDose;
    var blockteabed = basalDose * 1.1;
    var blockbed24 = basalDose * 0.8;
  }
  if (age == 'Adult') {
    var block0004 = basalDose * 0.8;
    var block04bf = basalDose * 0.9;
    var blockbflunch = basalDose * 1.2;
    var blocklunchtea = basalDose;
    var blockteabed = basalDose * 1.1;
    var blockbed24 = basalDose * 0.8;
  }


  var nightBlock = new TimeBlock(); // ONLY ADULTS
  var morningBlock = new TimeBlock(); // ONLY CHILDREN
  var bfBlock = new TimeBlock();
  var lunchBlock = new TimeBlock();
  var teaBlock = new TimeBlock();
  var bedBlock = new TimeBlock();

  // apply to both adults and children

    bfBlock.starthours = bfHours; bfBlock.startminutes = bfMinutes;
    bfBlock.stophours = lunchHours; bfBlock.stopminutes = lunchMinutes;
    bfBlock.rate = closest(intervals, blockbflunch);

    lunchBlock.starthours = lunchHours; lunchBlock.startminutes = lunchMinutes;
    lunchBlock.stophours = teaHours; lunchBlock.stopminutes = teaMinutes;
    lunchBlock.rate = closest(intervals, blocklunchtea);

    teaBlock.starthours = teaHours; teaBlock.startminutes = teaMinutes;
    teaBlock.stophours = bedHours; teaBlock.stopminutes = bedMinutes;
    teaBlock.rate = closest(intervals, blockteabed);

    bedBlock.starthours = bedHours; bedBlock.startminutes = bedMinutes;
    bedBlock.stophours = "24"; bedBlock.stopminutes = "00";
    bedBlock.rate = closest(intervals, blockbed24);

  if (age != "Adult") {
    nightBlock.starthours = "00"; nightBlock.startminutes="00";
    nightBlock.stophours = bfHours; nightBlock.stopminutes = bfMinutes;
    nightBlock.rate = closest(intervals, block00bf);
    nightBlock.timeblock = 0;
    bfBlock.timeblock = 1;
    lunchBlock.timeblock = 2;
    teaBlock.timeblock = 3;
    bedBlock.timeblock = 4;

    timeblockarray = [nightBlock, bfBlock, lunchBlock, teaBlock, bedBlock];

  } else {
    nightBlock.starthours = "00"; nightBlock.startminutes = "00";
    nightBlock.stophours = "04"; nightBlock.stopminutes = "00";
    nightBlock.rate = closest(intervals, block0004);
    nightBlock.timeblock = 0;

    morningBlock.starthours = "04"; morningBlock.startminutes = "00";
    morningBlock.stophours = bfHours; morningBlock.stopminutes = bfMinutes;
    morningBlock.rate = closest(intervals, block04bf);
    morningBlock.timeblock = 1;

    bfBlock.timeblock = 2;
    lunchBlock.timeblock = 3;
    teaBlock.timeblock = 4;
    bedBlock.timeblock = 5;

    timeblockarray = [nightBlock, morningBlock, bfBlock, lunchBlock, teaBlock, bedBlock];
  }

  return timeblockarray;
}

/////////////////////////////


Template.charts.onRendered(function() {
    // Get the context of the canvas element we want to select
    var ctx  = document.getElementById("myChart").getContext("2d");
  //  var ctx2 = document.getElementById("myChart2").getContext("2d");
  //  var ctx3 = document.getElementById("myChart3").getContext("2d");
//    var ctx4 = document.getElementById("myChart4").getContext("2d");
  //  var ctx5 = document.getElementById("myChart5").getContext("2d");
//    drawChart();

      Deps.autorun(function () {
        drawChart(ctx);
      });

});


function blocks(){
  unitsperhour = [];
  var blocks = Session.get('timeblock');
  for (var i = 0; i < blocks.length; i++) {
    var newBlock = blocks[i];
    var hours = totalHours(newBlock);
    for (var j = 0; j < hours; j++) {
      unitsperhour.push(newBlock.rate);
    }
  }

  return unitsperhour;
}

function dataBlocks(){
  var totalUnitsArray = [];
  var blocks = Session.get('timeblock');
  for (var i = 0; i < blocks.length; i++) {
    var newBlock = blocks[i];
    var hours = totalHours(newBlock);
    var totalInsulinUnits = totalUnits(hours, newBlock);
    var startDate = new Date(1990,1,1, newBlock.starthours, newBlock.startminutes);
    var stopDate = new Date(1990,1,1, newBlock.stophours, newBlock.stopminutes);
    var returnValue = {x: startDate, y: totalInsulinUnits};
    totalUnitsArray.push(returnValue);
  }
  console.log(totalUnitsArray);
  return totalUnitsArray;
}



function drawChart(ctx){
  // Set the options
  var options = {

      ///Boolean - Whether grid lines are shown across the chart
      scaleShowGridLines: true,

      //String - Colour of the grid lines
      scaleGridLineColor: "rgba(0,0,0,.05)",

      //Number - Width of the grid lines
      scaleGridLineWidth: 1.0,

      //Boolean - Whether to show horizontal lines (except X axis)
      scaleShowHorizontalLines: true,

      //Boolean - Whether to show vertical lines (except Y axis)
      scaleShowVerticalLines: true,

      //Boolean - Whether the line is curved between points
      bezierCurve: false,

      //Number - Tension of the bezier curve between points
      bezierCurveTension: 0.4,

      //Boolean - Whether to show a dot for each point
      pointDot: true,

      //Number - Radius of each point dot in pixels
      pointDotRadius: 4,

      //Number - Pixel width of point dot stroke
      pointDotStrokeWidth: 1,

      //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
      pointHitDetectionRadius: 20,

      //Boolean - Whether to show a stroke for datasets
      datasetStroke: true,

      //Number - Pixel width of dataset stroke
      datasetStrokeWidth: 2,

      //Boolean - Whether to fill the dataset with a colour
      datasetFill: true,

      //String - A legend template
      responsive: true,
      maintainAspectRatio: true,
      showTooltips: false

  };

  // Set the data

  var data = {
      labels: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
      datasets: [{
          label: "Pump Basal Rates",
          fillColor: "rgba(255,00,0,0.2)",
          strokeColor: "rgba(255,0,0,1)",
          pointColor: "rgba(255,0,0,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: blocks()
        }]
  };

  /*
  data: [
    {
      type: "line",
      xValueType: "dateTime",
      dataPoints: dataBlocks()
    }
  ]

*/
  var mySelectedBlocks = Session.get('selectedTimeBlocks');
  var blocksArray = Session.get('timeblock');


  // draw the charts
  var myLineChart = new Chart(ctx).Bar(data, options);

  if (mySelectedBlocks.length > 0) {
    ///blocks have been selectedTimeBlocks
    for (var i = 0; i < mySelectedBlocks.length; i++) {
      var newblock = mySelectedBlocks[i];
      var timeblock = blocksArray[newblock];
      var lengthOfTimeBlock = totalHours(timeblock);
      var starthours = parseInt(timeblock.starthours);

      for (var j = starthours; j < starthours + lengthOfTimeBlock; j++) {
        myLineChart.datasets[0].bars[j].fillColor = "rgba(220,220,220,0.4)";
        myLineChart.datasets[0].bars[j].strokeColor = "rgba(0,0,0,1)";
      }
    }
    myLineChart.update();
  }
}
