
/* line 1 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/lv.js.rl" */
;(function() {


/* line 117 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/lv.js.rl" */



/* line 11 "js/lib/gherkin/lexer/lv.js" */
const _lexer_actions = [
	0, 1, 0, 1, 1, 1, 2, 1, 
	3, 1, 4, 1, 5, 1, 6, 1, 
	7, 1, 8, 1, 9, 1, 10, 1, 
	11, 1, 14, 1, 15, 1, 16, 1, 
	17, 1, 18, 1, 19, 1, 20, 1, 
	21, 2, 2, 16, 2, 11, 0, 2, 
	12, 13, 2, 15, 0, 2, 15, 1, 
	2, 15, 14, 2, 15, 17, 2, 16, 
	4, 2, 16, 5, 2, 16, 6, 2, 
	16, 7, 2, 16, 8, 2, 16, 14, 
	2, 18, 19, 2, 20, 0, 2, 20, 
	1, 2, 20, 14, 2, 20, 17, 3, 
	3, 12, 13, 3, 9, 12, 13, 3, 
	10, 12, 13, 3, 11, 12, 13, 3, 
	12, 13, 16, 3, 15, 12, 13, 4, 
	2, 12, 13, 16, 4, 15, 0, 12, 
	13
];

const _lexer_key_offsets = [
	0, 0, 19, 37, 38, 39, 43, 48, 
	53, 58, 63, 67, 71, 73, 74, 75, 
	76, 77, 78, 79, 80, 81, 82, 83, 
	84, 85, 86, 87, 88, 89, 90, 92, 
	97, 104, 109, 110, 111, 113, 114, 115, 
	116, 117, 118, 119, 120, 131, 133, 135, 
	137, 139, 141, 143, 145, 147, 149, 151, 
	153, 155, 157, 159, 162, 164, 166, 168, 
	170, 172, 190, 191, 193, 194, 195, 196, 
	197, 198, 199, 200, 201, 202, 203, 204, 
	219, 221, 223, 225, 227, 229, 231, 233, 
	235, 237, 239, 241, 243, 245, 247, 249, 
	251, 253, 256, 258, 260, 262, 264, 266, 
	268, 270, 272, 274, 276, 278, 280, 282, 
	284, 286, 288, 290, 292, 294, 296, 298, 
	300, 302, 304, 306, 308, 310, 312, 314, 
	316, 318, 321, 323, 325, 327, 329, 331, 
	333, 335, 337, 339, 341, 343, 345, 347, 
	348, 349, 350, 351, 352, 353, 354, 355, 
	362, 365, 367, 369, 371, 373, 375, 377, 
	379, 381, 383, 385, 387, 389, 391, 393, 
	395, 397, 399, 401, 403, 404, 405, 406, 
	407, 408, 409, 411, 412, 413, 414, 415, 
	416, 417, 418, 419, 421, 422, 423, 424, 
	425, 426, 427, 428, 429, 430, 431, 432, 
	433, 434, 435, 436, 451, 453, 455, 457, 
	459, 461, 463, 465, 467, 469, 471, 473, 
	475, 477, 479, 481, 483, 485, 488, 490, 
	492, 494, 496, 498, 500, 502, 504, 506, 
	508, 510, 512, 514, 516, 518, 520, 522, 
	524, 526, 528, 530, 532, 534, 536, 538, 
	540, 542, 544, 546, 548, 550, 552, 553, 
	554, 569, 571, 573, 575, 577, 579, 581, 
	583, 585, 587, 589, 591, 593, 595, 597, 
	599, 601, 603, 606, 608, 610, 612, 614, 
	616, 618, 620, 622, 624, 626, 628, 630, 
	632, 634, 636, 638, 640, 642, 644, 646, 
	649, 651, 653, 655, 657, 659, 661, 663, 
	665, 668, 670, 672, 674, 676, 678, 680, 
	682, 684, 687, 689, 691, 693, 695, 697, 
	699, 701, 703, 705, 707, 709, 711, 713, 
	715, 717, 719, 721, 723, 725, 727, 728, 
	729, 730, 731, 732, 733, 734, 735, 736, 
	737, 741, 747, 750, 752, 758, 776, 778, 
	780, 782, 784, 786, 788, 790, 792, 794, 
	796, 798, 800, 802, 804, 806, 808, 810, 
	812, 814, 816, 818, 820, 823, 825, 827, 
	829, 831, 833, 835, 837, 839, 841, 843, 
	846, 848, 850, 852, 854, 856, 858, 860, 
	862, 865, 867, 869, 871, 873, 875, 877, 
	879, 881, 883, 885, 887, 889, 891, 893, 
	895, 897, 899, 901, 902, 903, 904, 905, 
	906, 907, 908, 909, 910, 911, 912, 913, 
	914, 915, 916, 917
];

const _lexer_trans_keys = [
	10, 32, 34, 35, 37, 42, 64, 66, 
	70, 74, 75, 80, 83, 84, 85, 124, 
	239, 9, 13, 10, 32, 34, 35, 37, 
	42, 64, 66, 70, 74, 75, 80, 83, 
	84, 85, 124, 9, 13, 34, 34, 10, 
	32, 9, 13, 10, 32, 34, 9, 13, 
	10, 32, 34, 9, 13, 10, 32, 34, 
	9, 13, 10, 32, 34, 9, 13, 10, 
	32, 9, 13, 10, 32, 9, 13, 10, 
	13, 10, 95, 70, 69, 65, 84, 85, 
	82, 69, 95, 69, 78, 68, 95, 37, 
	32, 10, 10, 13, 13, 32, 64, 9, 
	10, 9, 10, 13, 32, 64, 11, 12, 
	10, 32, 64, 9, 13, 101, 116, -60, 
	117, -85, -60, -115, 97, 58, 10, 10, 
	10, 32, 35, 37, 64, 70, 75, 80, 
	83, 9, 13, 10, 95, 10, 70, 10, 
	69, 10, 65, 10, 84, 10, 85, 10, 
	82, 10, 69, 10, 95, 10, 69, 10, 
	78, 10, 68, 10, 95, 10, 37, -60, 
	10, 117, -85, 10, -60, 10, -115, 10, 
	10, 97, 10, 58, 10, 32, 34, 35, 
	37, 42, 64, 66, 70, 74, 75, 80, 
	83, 84, 85, 124, 9, 13, 97, 97, 
	111, 100, 110, 116, 101, 107, 115, 116, 
	115, 58, 10, 10, 10, 32, 35, 37, 
	42, 64, 66, 70, 74, 75, 83, 84, 
	85, 9, 13, 10, 95, 10, 70, 10, 
	69, 10, 65, 10, 84, 10, 85, 10, 
	82, 10, 69, 10, 95, 10, 69, 10, 
	78, 10, 68, 10, 95, 10, 37, 10, 
	32, 10, 101, 10, 116, -60, 10, 117, 
	-85, 10, -60, 10, -115, 10, 10, 97, 
	10, 58, 10, 110, 10, 107, 10, 99, 
	10, 105, 10, 111, 10, 110, 10, 97, 
	10, 108, 10, 105, 10, 116, -60, 10, 
	-127, 10, 10, 116, 10, 101, 10, 97, 
	10, 97, 10, 100, 10, 99, 10, 101, 
	10, 110, -60, 10, -127, 10, 10, 114, 
	10, 105, 10, 106, 10, 115, 10, 32, 
	58, 10, 112, -60, 10, -109, 10, 10, 
	99, 10, 32, 10, 112, 10, 97, 10, 
	114, 10, 97, 10, 117, 10, 103, 10, 
	110, 97, 105, 114, 97, 117, 103, 115, 
	58, 10, 10, 10, 32, 35, 70, 124, 
	9, 13, -60, 10, 117, -85, 10, -60, 
	10, -115, 10, 10, 97, 10, 58, 10, 
	110, 10, 107, 10, 99, 10, 105, 10, 
	111, 10, 110, 10, 97, 10, 108, 10, 
	105, 10, 116, -60, 10, -127, 10, 10, 
	116, 10, 101, 101, 109, -60, -109, 114, 
	105, 99, 105, 101, 110, -60, -127, 114, 
	105, 106, 115, 32, 58, 112, -60, -109, 
	99, 32, 112, 97, 114, 97, 117, 103, 
	97, 58, 10, 10, 10, 32, 35, 37, 
	42, 64, 66, 70, 74, 75, 83, 84, 
	85, 9, 13, 10, 95, 10, 70, 10, 
	69, 10, 65, 10, 84, 10, 85, 10, 
	82, 10, 69, 10, 95, 10, 69, 10, 
	78, 10, 68, 10, 95, 10, 37, 10, 
	32, 10, 101, 10, 116, -60, 10, 117, 
	-85, 10, -60, 10, -115, 10, 10, 97, 
	10, 58, 10, 110, 10, 107, 10, 99, 
	10, 105, 10, 111, 10, 110, 10, 97, 
	10, 108, 10, 105, 10, 116, -60, 10, 
	-127, 10, 10, 116, 10, 101, 10, 97, 
	10, 97, 10, 100, 10, 99, 10, 101, 
	10, 110, -60, 10, -127, 10, 10, 114, 
	10, 105, 10, 106, 10, 115, 10, 110, 
	10, 10, 10, 32, 35, 37, 42, 64, 
	66, 70, 74, 75, 83, 84, 85, 9, 
	13, 10, 95, 10, 70, 10, 69, 10, 
	65, 10, 84, 10, 85, 10, 82, 10, 
	69, 10, 95, 10, 69, 10, 78, 10, 
	68, 10, 95, 10, 37, 10, 32, 10, 
	101, 10, 116, -60, 10, 117, -85, 10, 
	-60, 10, -115, 10, 10, 97, 10, 58, 
	10, 110, 10, 107, 10, 99, 10, 105, 
	10, 111, 10, 110, 10, 97, 10, 108, 
	10, 105, 10, 116, -60, 10, -127, 10, 
	10, 116, 10, 101, 10, 97, 10, 97, 
	111, 10, 100, 10, 110, 10, 116, 10, 
	101, 10, 107, 10, 115, 10, 116, 10, 
	115, 10, 99, 105, 10, 101, 10, 110, 
	-60, 10, -127, 10, 10, 114, 10, 105, 
	10, 106, 10, 115, 10, 32, 58, 10, 
	112, -60, 10, -109, 10, 10, 99, 10, 
	32, 10, 112, 10, 97, 10, 114, 10, 
	97, 10, 117, 10, 103, 10, 116, 10, 
	117, -60, 10, -127, 10, 10, 99, 10, 
	105, 10, 106, 10, 97, 10, 110, 116, 
	117, -60, -127, 99, 105, 106, 97, 97, 
	110, 32, 124, 9, 13, 10, 32, 92, 
	124, 9, 13, 10, 92, 124, 10, 92, 
	10, 32, 92, 124, 9, 13, 10, 32, 
	34, 35, 37, 42, 64, 66, 70, 74, 
	75, 80, 83, 84, 85, 124, 9, 13, 
	10, 110, 10, 107, 10, 99, 10, 105, 
	10, 111, 10, 110, 10, 97, 10, 108, 
	10, 105, 10, 116, -60, 10, -127, 10, 
	10, 116, 10, 101, 10, 111, 10, 110, 
	10, 116, 10, 101, 10, 107, 10, 115, 
	10, 116, 10, 115, 10, 97, 105, 10, 
	114, 10, 97, 10, 117, 10, 103, 10, 
	101, 10, 109, -60, 10, -109, 10, 10, 
	114, 10, 105, 10, 99, 105, 10, 101, 
	10, 110, -60, 10, -127, 10, 10, 114, 
	10, 105, 10, 106, 10, 115, 10, 32, 
	58, 10, 112, -60, 10, -109, 10, 10, 
	99, 10, 32, 10, 112, 10, 97, 10, 
	114, 10, 97, 10, 117, 10, 103, 10, 
	116, 10, 117, -60, 10, -127, 10, 10, 
	99, 10, 105, 10, 106, 110, 107, 99, 
	105, 111, 110, 97, 108, 105, 116, -60, 
	-127, 116, 101, 187, 191, 0
];

const _lexer_single_lengths = [
	0, 17, 16, 1, 1, 2, 3, 3, 
	3, 3, 2, 2, 2, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 2, 3, 
	5, 3, 1, 1, 2, 1, 1, 1, 
	1, 1, 1, 1, 9, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 3, 2, 2, 2, 2, 
	2, 16, 1, 2, 1, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 1, 13, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 3, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 3, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 1, 
	1, 1, 1, 1, 1, 1, 1, 5, 
	3, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 1, 1, 1, 1, 
	1, 1, 2, 1, 1, 1, 1, 1, 
	1, 1, 1, 2, 1, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 1, 1, 
	1, 1, 1, 13, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 3, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 1, 1, 
	13, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 3, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 3, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	3, 2, 2, 2, 2, 2, 2, 2, 
	2, 3, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 1, 1, 
	1, 1, 1, 1, 1, 1, 1, 1, 
	2, 4, 3, 2, 4, 16, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 3, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 3, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	3, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 1, 1, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 1, 1, 
	1, 1, 1, 0
];

const _lexer_range_lengths = [
	0, 1, 1, 0, 0, 1, 1, 1, 
	1, 1, 1, 1, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 1, 
	1, 1, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 1, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 1, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 1, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 1, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 1, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	1, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	1, 1, 0, 0, 1, 1, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0
];

const _lexer_index_offsets = [
	0, 0, 19, 37, 39, 41, 45, 50, 
	55, 60, 65, 69, 73, 76, 78, 80, 
	82, 84, 86, 88, 90, 92, 94, 96, 
	98, 100, 102, 104, 106, 108, 110, 113, 
	118, 125, 130, 132, 134, 137, 139, 141, 
	143, 145, 147, 149, 151, 162, 165, 168, 
	171, 174, 177, 180, 183, 186, 189, 192, 
	195, 198, 201, 204, 208, 211, 214, 217, 
	220, 223, 241, 243, 246, 248, 250, 252, 
	254, 256, 258, 260, 262, 264, 266, 268, 
	283, 286, 289, 292, 295, 298, 301, 304, 
	307, 310, 313, 316, 319, 322, 325, 328, 
	331, 334, 338, 341, 344, 347, 350, 353, 
	356, 359, 362, 365, 368, 371, 374, 377, 
	380, 383, 386, 389, 392, 395, 398, 401, 
	404, 407, 410, 413, 416, 419, 422, 425, 
	428, 431, 435, 438, 441, 444, 447, 450, 
	453, 456, 459, 462, 465, 468, 471, 474, 
	476, 478, 480, 482, 484, 486, 488, 490, 
	497, 501, 504, 507, 510, 513, 516, 519, 
	522, 525, 528, 531, 534, 537, 540, 543, 
	546, 549, 552, 555, 558, 560, 562, 564, 
	566, 568, 570, 573, 575, 577, 579, 581, 
	583, 585, 587, 589, 592, 594, 596, 598, 
	600, 602, 604, 606, 608, 610, 612, 614, 
	616, 618, 620, 622, 637, 640, 643, 646, 
	649, 652, 655, 658, 661, 664, 667, 670, 
	673, 676, 679, 682, 685, 688, 692, 695, 
	698, 701, 704, 707, 710, 713, 716, 719, 
	722, 725, 728, 731, 734, 737, 740, 743, 
	746, 749, 752, 755, 758, 761, 764, 767, 
	770, 773, 776, 779, 782, 785, 788, 790, 
	792, 807, 810, 813, 816, 819, 822, 825, 
	828, 831, 834, 837, 840, 843, 846, 849, 
	852, 855, 858, 862, 865, 868, 871, 874, 
	877, 880, 883, 886, 889, 892, 895, 898, 
	901, 904, 907, 910, 913, 916, 919, 922, 
	926, 929, 932, 935, 938, 941, 944, 947, 
	950, 954, 957, 960, 963, 966, 969, 972, 
	975, 978, 982, 985, 988, 991, 994, 997, 
	1000, 1003, 1006, 1009, 1012, 1015, 1018, 1021, 
	1024, 1027, 1030, 1033, 1036, 1039, 1042, 1044, 
	1046, 1048, 1050, 1052, 1054, 1056, 1058, 1060, 
	1062, 1066, 1072, 1076, 1079, 1085, 1103, 1106, 
	1109, 1112, 1115, 1118, 1121, 1124, 1127, 1130, 
	1133, 1136, 1139, 1142, 1145, 1148, 1151, 1154, 
	1157, 1160, 1163, 1166, 1169, 1173, 1176, 1179, 
	1182, 1185, 1188, 1191, 1194, 1197, 1200, 1203, 
	1207, 1210, 1213, 1216, 1219, 1222, 1225, 1228, 
	1231, 1235, 1238, 1241, 1244, 1247, 1250, 1253, 
	1256, 1259, 1262, 1265, 1268, 1271, 1274, 1277, 
	1280, 1283, 1286, 1289, 1291, 1293, 1295, 1297, 
	1299, 1301, 1303, 1305, 1307, 1309, 1311, 1313, 
	1315, 1317, 1319, 1321
];

const _lexer_indicies = [
	2, 1, 3, 4, 5, 6, 7, 8, 
	9, 10, 11, 12, 13, 14, 15, 16, 
	17, 1, 0, 2, 1, 3, 4, 5, 
	6, 7, 8, 9, 10, 11, 12, 13, 
	14, 15, 16, 1, 0, 18, 0, 19, 
	0, 20, 19, 19, 0, 23, 22, 24, 
	22, 21, 27, 26, 28, 26, 25, 27, 
	26, 29, 26, 25, 27, 26, 30, 26, 
	25, 32, 31, 31, 0, 2, 33, 33, 
	0, 35, 36, 34, 2, 0, 37, 0, 
	38, 0, 39, 0, 40, 0, 41, 0, 
	42, 0, 43, 0, 44, 0, 45, 0, 
	46, 0, 47, 0, 48, 0, 49, 0, 
	50, 0, 51, 0, 0, 52, 54, 55, 
	53, 0, 0, 0, 0, 56, 57, 58, 
	57, 57, 60, 59, 56, 2, 61, 7, 
	61, 0, 62, 0, 63, 0, 64, 65, 
	0, 66, 0, 67, 0, 68, 0, 69, 
	0, 70, 0, 72, 71, 74, 73, 74, 
	75, 76, 77, 76, 78, 79, 80, 81, 
	75, 73, 74, 82, 73, 74, 83, 73, 
	74, 84, 73, 74, 85, 73, 74, 86, 
	73, 74, 87, 73, 74, 88, 73, 74, 
	89, 73, 74, 90, 73, 74, 91, 73, 
	74, 92, 73, 74, 93, 73, 74, 94, 
	73, 74, 95, 73, 96, 74, 97, 73, 
	98, 74, 73, 99, 74, 73, 100, 74, 
	73, 74, 101, 73, 74, 102, 73, 104, 
	103, 105, 106, 107, 108, 109, 110, 111, 
	112, 113, 114, 115, 116, 117, 118, 103, 
	0, 63, 0, 119, 120, 0, 63, 0, 
	121, 0, 122, 0, 123, 0, 124, 0, 
	125, 0, 126, 0, 127, 0, 128, 0, 
	130, 129, 132, 131, 132, 133, 134, 135, 
	136, 134, 137, 138, 139, 140, 141, 140, 
	142, 133, 131, 132, 143, 131, 132, 144, 
	131, 132, 145, 131, 132, 146, 131, 132, 
	147, 131, 132, 148, 131, 132, 149, 131, 
	132, 150, 131, 132, 151, 131, 132, 152, 
	131, 132, 153, 131, 132, 154, 131, 132, 
	155, 131, 132, 156, 131, 132, 157, 131, 
	132, 158, 131, 132, 159, 131, 160, 132, 
	161, 131, 162, 132, 131, 163, 132, 131, 
	164, 132, 131, 132, 165, 131, 132, 157, 
	131, 132, 166, 131, 132, 167, 131, 132, 
	168, 131, 132, 169, 131, 132, 170, 131, 
	132, 171, 131, 132, 172, 131, 132, 173, 
	131, 132, 174, 131, 132, 175, 131, 176, 
	132, 131, 177, 132, 131, 132, 178, 131, 
	132, 165, 131, 132, 159, 131, 132, 179, 
	131, 132, 159, 131, 132, 180, 131, 132, 
	181, 131, 132, 182, 131, 183, 132, 131, 
	184, 132, 131, 132, 185, 131, 132, 186, 
	131, 132, 187, 131, 132, 188, 131, 132, 
	189, 157, 131, 132, 190, 131, 191, 132, 
	131, 192, 132, 131, 132, 193, 131, 132, 
	194, 131, 132, 195, 131, 132, 196, 131, 
	132, 197, 131, 132, 198, 131, 132, 199, 
	131, 132, 164, 131, 132, 159, 131, 200, 
	201, 0, 202, 0, 203, 0, 204, 0, 
	205, 0, 206, 0, 207, 0, 209, 208, 
	211, 210, 211, 212, 213, 214, 213, 212, 
	210, 215, 211, 216, 210, 217, 211, 210, 
	218, 211, 210, 219, 211, 210, 211, 220, 
	210, 211, 221, 210, 211, 222, 210, 211, 
	223, 210, 211, 224, 210, 211, 225, 210, 
	211, 226, 210, 211, 227, 210, 211, 228, 
	210, 211, 229, 210, 211, 230, 210, 211, 
	231, 210, 232, 211, 210, 233, 211, 210, 
	211, 234, 210, 211, 220, 210, 235, 0, 
	236, 0, 237, 0, 238, 0, 239, 0, 
	206, 0, 240, 241, 0, 242, 0, 243, 
	0, 244, 0, 245, 0, 246, 0, 247, 
	0, 248, 0, 249, 0, 250, 251, 0, 
	252, 0, 253, 0, 254, 0, 255, 0, 
	256, 0, 257, 0, 258, 0, 259, 0, 
	260, 0, 261, 0, 262, 0, 263, 0, 
	264, 0, 266, 265, 268, 267, 268, 269, 
	270, 271, 272, 270, 273, 274, 275, 276, 
	277, 276, 278, 269, 267, 268, 279, 267, 
	268, 280, 267, 268, 281, 267, 268, 282, 
	267, 268, 283, 267, 268, 284, 267, 268, 
	285, 267, 268, 286, 267, 268, 287, 267, 
	268, 288, 267, 268, 289, 267, 268, 290, 
	267, 268, 291, 267, 268, 292, 267, 268, 
	293, 267, 268, 294, 267, 268, 295, 267, 
	296, 268, 297, 267, 298, 268, 267, 299, 
	268, 267, 300, 268, 267, 268, 301, 267, 
	268, 293, 267, 268, 302, 267, 268, 303, 
	267, 268, 304, 267, 268, 305, 267, 268, 
	306, 267, 268, 307, 267, 268, 308, 267, 
	268, 309, 267, 268, 310, 267, 268, 311, 
	267, 312, 268, 267, 313, 268, 267, 268, 
	314, 267, 268, 301, 267, 268, 295, 267, 
	268, 315, 267, 268, 295, 267, 268, 316, 
	267, 268, 317, 267, 268, 318, 267, 319, 
	268, 267, 320, 268, 267, 268, 321, 267, 
	268, 322, 267, 268, 323, 267, 268, 301, 
	267, 268, 295, 267, 325, 324, 327, 326, 
	327, 328, 329, 330, 331, 329, 332, 333, 
	334, 335, 336, 337, 338, 328, 326, 327, 
	339, 326, 327, 340, 326, 327, 341, 326, 
	327, 342, 326, 327, 343, 326, 327, 344, 
	326, 327, 345, 326, 327, 346, 326, 327, 
	347, 326, 327, 348, 326, 327, 349, 326, 
	327, 350, 326, 327, 351, 326, 327, 352, 
	326, 327, 353, 326, 327, 354, 326, 327, 
	355, 326, 356, 327, 357, 326, 358, 327, 
	326, 359, 327, 326, 360, 327, 326, 327, 
	361, 326, 327, 353, 326, 327, 362, 326, 
	327, 363, 326, 327, 364, 326, 327, 365, 
	326, 327, 366, 326, 327, 367, 326, 327, 
	368, 326, 327, 369, 326, 327, 370, 326, 
	327, 371, 326, 372, 327, 326, 373, 327, 
	326, 327, 374, 326, 327, 361, 326, 327, 
	355, 326, 327, 375, 376, 326, 327, 355, 
	326, 327, 377, 326, 327, 378, 326, 327, 
	379, 326, 327, 380, 326, 327, 381, 326, 
	327, 382, 326, 327, 361, 326, 327, 383, 
	384, 326, 327, 385, 326, 327, 386, 326, 
	387, 327, 326, 388, 327, 326, 327, 389, 
	326, 327, 390, 326, 327, 391, 326, 327, 
	392, 326, 327, 393, 353, 326, 327, 394, 
	326, 395, 327, 326, 396, 327, 326, 327, 
	397, 326, 327, 398, 326, 327, 399, 326, 
	327, 400, 326, 327, 401, 326, 327, 402, 
	326, 327, 403, 326, 327, 360, 326, 327, 
	404, 326, 327, 405, 326, 406, 327, 326, 
	407, 327, 326, 327, 408, 326, 327, 409, 
	326, 327, 360, 326, 327, 375, 326, 327, 
	355, 326, 410, 0, 411, 0, 412, 0, 
	413, 0, 414, 0, 415, 0, 416, 0, 
	127, 0, 119, 0, 63, 0, 417, 418, 
	417, 0, 421, 420, 422, 423, 420, 419, 
	0, 425, 426, 424, 0, 425, 424, 421, 
	427, 425, 426, 427, 424, 421, 428, 429, 
	430, 431, 432, 433, 434, 435, 436, 437, 
	438, 439, 440, 441, 442, 428, 0, 74, 
	443, 73, 74, 444, 73, 74, 445, 73, 
	74, 446, 73, 74, 447, 73, 74, 448, 
	73, 74, 449, 73, 74, 450, 73, 74, 
	451, 73, 74, 452, 73, 453, 74, 73, 
	454, 74, 73, 74, 455, 73, 74, 101, 
	73, 74, 456, 73, 74, 457, 73, 74, 
	458, 73, 74, 459, 73, 74, 460, 73, 
	74, 461, 73, 74, 462, 73, 74, 101, 
	73, 74, 463, 464, 73, 74, 465, 73, 
	74, 466, 73, 74, 467, 73, 74, 462, 
	73, 74, 468, 73, 74, 469, 73, 470, 
	74, 73, 471, 74, 73, 74, 472, 73, 
	74, 101, 73, 74, 473, 474, 73, 74, 
	475, 73, 74, 476, 73, 477, 74, 73, 
	478, 74, 73, 74, 479, 73, 74, 480, 
	73, 74, 481, 73, 74, 482, 73, 74, 
	483, 102, 73, 74, 484, 73, 485, 74, 
	73, 486, 74, 73, 74, 487, 73, 74, 
	488, 73, 74, 489, 73, 74, 490, 73, 
	74, 491, 73, 74, 492, 73, 74, 493, 
	73, 74, 100, 73, 74, 494, 73, 74, 
	495, 73, 496, 74, 73, 497, 74, 73, 
	74, 498, 73, 74, 499, 73, 74, 100, 
	73, 500, 0, 501, 0, 502, 0, 503, 
	0, 504, 0, 505, 0, 506, 0, 507, 
	0, 508, 0, 509, 0, 510, 0, 511, 
	0, 512, 0, 69, 0, 513, 0, 1, 
	0, 514, 0
];

const _lexer_trans_targs = [
	0, 2, 2, 3, 12, 14, 28, 31, 
	34, 36, 66, 67, 142, 178, 342, 343, 
	344, 425, 4, 5, 6, 7, 7, 7, 
	8, 7, 7, 7, 8, 9, 10, 11, 
	2, 11, 12, 2, 13, 15, 16, 17, 
	18, 19, 20, 21, 22, 23, 24, 25, 
	26, 27, 427, 29, 30, 30, 2, 13, 
	32, 33, 2, 32, 31, 33, 35, 28, 
	37, 411, 38, 39, 40, 41, 42, 43, 
	44, 43, 44, 44, 2, 45, 59, 364, 
	372, 383, 46, 47, 48, 49, 50, 51, 
	52, 53, 54, 55, 56, 57, 58, 2, 
	60, 350, 61, 62, 63, 64, 65, 2, 
	2, 3, 12, 14, 28, 31, 34, 36, 
	66, 67, 142, 178, 342, 343, 344, 68, 
	69, 70, 71, 72, 73, 74, 75, 76, 
	77, 78, 79, 78, 79, 79, 2, 80, 
	94, 95, 97, 117, 118, 120, 141, 81, 
	82, 83, 84, 85, 86, 87, 88, 89, 
	90, 91, 92, 93, 2, 65, 96, 94, 
	98, 103, 99, 100, 101, 102, 104, 105, 
	106, 107, 108, 109, 110, 111, 112, 113, 
	114, 115, 116, 119, 121, 122, 123, 124, 
	125, 126, 127, 128, 129, 130, 131, 132, 
	133, 134, 135, 136, 137, 138, 139, 140, 
	143, 172, 144, 145, 146, 147, 148, 149, 
	150, 151, 150, 151, 151, 2, 152, 153, 
	158, 154, 155, 156, 157, 65, 159, 160, 
	161, 162, 163, 164, 165, 166, 167, 168, 
	169, 170, 171, 173, 174, 175, 176, 177, 
	179, 334, 180, 181, 182, 183, 184, 185, 
	186, 187, 188, 254, 189, 190, 191, 192, 
	193, 194, 195, 196, 197, 198, 199, 200, 
	201, 202, 203, 202, 203, 203, 2, 204, 
	218, 219, 221, 241, 242, 244, 253, 205, 
	206, 207, 208, 209, 210, 211, 212, 213, 
	214, 215, 216, 217, 2, 65, 220, 218, 
	222, 227, 223, 224, 225, 226, 228, 229, 
	230, 231, 232, 233, 234, 235, 236, 237, 
	238, 239, 240, 243, 245, 246, 247, 248, 
	249, 250, 251, 252, 255, 256, 255, 256, 
	256, 2, 257, 271, 272, 274, 294, 295, 
	304, 332, 333, 258, 259, 260, 261, 262, 
	263, 264, 265, 266, 267, 268, 269, 270, 
	2, 65, 273, 271, 275, 280, 276, 277, 
	278, 279, 281, 282, 283, 284, 285, 286, 
	287, 288, 289, 290, 291, 292, 293, 296, 
	297, 298, 299, 300, 301, 302, 303, 305, 
	325, 306, 307, 308, 309, 310, 311, 312, 
	313, 314, 315, 316, 317, 318, 319, 320, 
	321, 322, 323, 324, 326, 327, 328, 329, 
	330, 331, 335, 336, 337, 338, 339, 340, 
	341, 344, 345, 346, 348, 349, 347, 345, 
	346, 347, 345, 348, 349, 3, 12, 14, 
	28, 31, 34, 36, 66, 67, 142, 178, 
	342, 343, 344, 351, 352, 353, 354, 355, 
	356, 357, 358, 359, 360, 361, 362, 363, 
	365, 366, 367, 368, 369, 370, 371, 373, 
	377, 374, 375, 376, 378, 379, 380, 381, 
	382, 384, 404, 385, 386, 387, 388, 389, 
	390, 391, 392, 393, 394, 395, 396, 397, 
	398, 399, 400, 401, 402, 403, 405, 406, 
	407, 408, 409, 410, 412, 413, 414, 415, 
	416, 417, 418, 419, 420, 421, 422, 423, 
	424, 426, 0
];

const _lexer_trans_actions = [
	39, 0, 47, 3, 1, 0, 25, 1, 
	25, 25, 25, 25, 25, 25, 25, 25, 
	31, 0, 0, 0, 47, 5, 41, 119, 
	41, 0, 29, 111, 29, 29, 0, 7, 
	95, 0, 0, 103, 21, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 50, 0, 99, 19, 
	0, 23, 107, 23, 44, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 50, 
	124, 0, 47, 0, 62, 29, 77, 77, 
	77, 77, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 9, 
	0, 0, 0, 0, 0, 0, 9, 27, 
	115, 53, 50, 27, 56, 50, 56, 56, 
	56, 56, 56, 56, 56, 56, 59, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 50, 124, 0, 47, 0, 65, 29, 
	77, 77, 77, 77, 77, 77, 77, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 11, 11, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	50, 124, 0, 47, 0, 74, 77, 0, 
	0, 0, 0, 0, 0, 17, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 50, 124, 0, 47, 0, 71, 29, 
	77, 77, 77, 77, 77, 77, 77, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 15, 15, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 50, 124, 0, 47, 
	0, 68, 29, 77, 77, 77, 77, 77, 
	77, 77, 77, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	13, 13, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 33, 33, 47, 33, 80, 
	0, 0, 35, 0, 0, 86, 83, 37, 
	89, 83, 89, 89, 89, 89, 89, 89, 
	89, 89, 92, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0
];

const _lexer_eof_actions = [
	0, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39
];

const lexer_start = 1;
const lexer_first_final = 427;
const lexer_error = 0;

const lexer_en_main = 1;


/* line 120 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/lv.js.rl" */

/* line 121 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/lv.js.rl" */

/* line 122 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/lv.js.rl" */

var Lexer = function(listener) {
  // Check that listener has the required functions
  var events = ['comment', 'tag', 'feature', 'background', 'scenario', 'scenario_outline', 'examples', 'step', 'py_string', 'row', 'eof'];
  for(e in events) {
    var event = events[e];
    if(typeof listener[event] != 'function') {
      "Error. No " + event + " function exists on " + JSON.stringify(listener);
    }
  }
  this.listener = listener;  
};

Lexer.prototype.scan = function(data) {
  var ending = "\n%_FEATURE_END_%";
  if(typeof data == 'string') {
    data = this.stringToBytes(data + ending);
  } else if(typeof Buffer != 'undefined' && Buffer.isBuffer(data)) {
    // Node.js
    var buf = new Buffer(data.length + ending.length);
    data.copy(buf, 0, 0);
    new Buffer(ending).copy(buf, data.length, 0);
    data = buf;
  }
  var eof = pe = data.length;
  var p = 0;

  this.line_number = 1;
  this.last_newline = 0;

  
/* line 783 "js/lib/gherkin/lexer/lv.js" */
{
	  this.cs = lexer_start;
} /* JSCodeGen::writeInit */

/* line 153 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/lv.js.rl" */
  
/* line 790 "js/lib/gherkin/lexer/lv.js" */
{
	var _klen, _trans, _keys, _ps, _widec, _acts, _nacts;
	var _goto_level, _resume, _eof_trans, _again, _test_eof;
	var _out;
	_klen = _trans = _keys = _acts = _nacts = null;
	_goto_level = 0;
	_resume = 10;
	_eof_trans = 15;
	_again = 20;
	_test_eof = 30;
	_out = 40;
	while (true) {
	_trigger_goto = false;
	if (_goto_level <= 0) {
	if (p == pe) {
		_goto_level = _test_eof;
		continue;
	}
	if ( this.cs == 0) {
		_goto_level = _out;
		continue;
	}
	}
	if (_goto_level <= _resume) {
	_keys = _lexer_key_offsets[ this.cs];
	_trans = _lexer_index_offsets[ this.cs];
	_klen = _lexer_single_lengths[ this.cs];
	_break_match = false;
	
	do {
	  if (_klen > 0) {
	     _lower = _keys;
	     _upper = _keys + _klen - 1;

	     while (true) {
	        if (_upper < _lower) { break; }
	        _mid = _lower + ( (_upper - _lower) >> 1 );

	        if ( data[p] < _lexer_trans_keys[_mid]) {
	           _upper = _mid - 1;
	        } else if ( data[p] > _lexer_trans_keys[_mid]) {
	           _lower = _mid + 1;
	        } else {
	           _trans += (_mid - _keys);
	           _break_match = true;
	           break;
	        };
	     } /* while */
	     if (_break_match) { break; }
	     _keys += _klen;
	     _trans += _klen;
	  }
	  _klen = _lexer_range_lengths[ this.cs];
	  if (_klen > 0) {
	     _lower = _keys;
	     _upper = _keys + (_klen << 1) - 2;
	     while (true) {
	        if (_upper < _lower) { break; }
	        _mid = _lower + (((_upper-_lower) >> 1) & ~1);
	        if ( data[p] < _lexer_trans_keys[_mid]) {
	          _upper = _mid - 2;
	         } else if ( data[p] > _lexer_trans_keys[_mid+1]) {
	          _lower = _mid + 2;
	        } else {
	          _trans += ((_mid - _keys) >> 1);
	          _break_match = true;
	          break;
	        }
	     } /* while */
	     if (_break_match) { break; }
	     _trans += _klen
	  }
	} while (false);
	_trans = _lexer_indicies[_trans];
	 this.cs = _lexer_trans_targs[_trans];
	if (_lexer_trans_actions[_trans] != 0) {
		_acts = _lexer_trans_actions[_trans];
		_nacts = _lexer_actions[_acts];
		_acts += 1;
		while (_nacts > 0) {
			_nacts -= 1;
			_acts += 1;
			switch (_lexer_actions[_acts - 1]) {
case 0:
/* line 6 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/lv.js.rl" */

    this.content_start = p;
    this.current_line = this.line_number;
    this.start_col = p - this.last_newline - (this.keyword+':').length;
  		break;
case 1:
/* line 12 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/lv.js.rl" */

    this.current_line = this.line_number;
    this.start_col = p - this.last_newline;
  		break;
case 2:
/* line 17 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/lv.js.rl" */

    this.content_start = p;
  		break;
case 3:
/* line 21 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/lv.js.rl" */

    var con = this.unindent(
      this.start_col, 
      this.bytesToString(data.slice(this.content_start, this.next_keyword_start-1)).replace(/(\r?\n)?([\t ])*$/, '').replace(/\\\"\\\"\\\"/mg, '"""')
    );
    this.listener.py_string(con, this.current_line); 
  		break;
case 4:
/* line 29 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/lv.js.rl" */

    p = this.store_keyword_content('feature', data, p, eof);
  		break;
case 5:
/* line 33 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/lv.js.rl" */

    p = this.store_keyword_content('background', data, p, eof);
  		break;
case 6:
/* line 37 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/lv.js.rl" */

    p = this.store_keyword_content('scenario', data, p, eof);
  		break;
case 7:
/* line 41 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/lv.js.rl" */

    p = this.store_keyword_content('scenario_outline', data, p, eof);
  		break;
case 8:
/* line 45 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/lv.js.rl" */

    p = this.store_keyword_content('examples', data, p, eof);
  		break;
case 9:
/* line 49 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/lv.js.rl" */

    var con = this.bytesToString(data.slice(this.content_start, p)).trim();
    this.listener.step(this.keyword, con, this.current_line);
  		break;
case 10:
/* line 54 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/lv.js.rl" */

    var con = this.bytesToString(data.slice(this.content_start, p)).trim();
    this.listener.comment(con, this.line_number);
    this.keyword_start = null;
  		break;
case 11:
/* line 60 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/lv.js.rl" */

    var con = this.bytesToString(data.slice(this.content_start, p)).trim();
    this.listener.tag(con, this.line_number);
    this.keyword_start = null;
  		break;
case 12:
/* line 66 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/lv.js.rl" */

    this.line_number++;
  		break;
case 13:
/* line 70 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/lv.js.rl" */

    this.last_newline = p + 1;
  		break;
case 14:
/* line 74 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/lv.js.rl" */

    this.keyword_start = this.keyword_start || p;
  		break;
case 15:
/* line 78 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/lv.js.rl" */

    this.keyword = this.bytesToString(data.slice(this.keyword_start, p)).replace(/:$/, '');
    this.keyword_start = null;
  		break;
case 16:
/* line 83 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/lv.js.rl" */

    this.next_keyword_start = p;
  		break;
case 17:
/* line 87 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/lv.js.rl" */

    p = p - 1;
    current_row = [];
    this.current_line = this.line_number;
  		break;
case 18:
/* line 93 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/lv.js.rl" */

    this.content_start = p;
  		break;
case 19:
/* line 97 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/lv.js.rl" */

    var con = this.bytesToString(data.slice(this.content_start, p)).trim();
    current_row.push(con.replace(/\\\|/, "|").replace(/\\n/, "\n").replace(/\\\\/, "\\"));
  		break;
case 20:
/* line 102 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/lv.js.rl" */

    this.listener.row(current_row, this.current_line);
  		break;
case 21:
/* line 106 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/lv.js.rl" */

    if(this.cs < lexer_first_final) {
      var content = this.current_line_content(data, p);
      throw "Lexing error on line " + this.line_number + ": '" + content + "'. See http://wiki.github.com/aslakhellesoy/gherkin/lexingerror for more information.";
    } else {
      this.listener.eof();
    }
    
  		break;
/* line 1006 "js/lib/gherkin/lexer/lv.js" */
			} /* action switch */
		}
	}
	if (_trigger_goto) {
		continue;
	}
	}
	if (_goto_level <= _again) {
	if ( this.cs == 0) {
		_goto_level = _out;
		continue;
	}
	p += 1;
	if (p != pe) {
		_goto_level = _resume;
		continue;
	}
	}
	if (_goto_level <= _test_eof) {
	if (p == eof) {
	__acts = _lexer_eof_actions[ this.cs];
	__nacts =  _lexer_actions[__acts];
	__acts += 1;
	while (__nacts > 0) {
		__nacts -= 1;
		__acts += 1;
		switch (_lexer_actions[__acts - 1]) {
case 21:
/* line 106 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/lv.js.rl" */

    if(this.cs < lexer_first_final) {
      var content = this.current_line_content(data, p);
      throw "Lexing error on line " + this.line_number + ": '" + content + "'. See http://wiki.github.com/aslakhellesoy/gherkin/lexingerror for more information.";
    } else {
      this.listener.eof();
    }
    
  		break;
/* line 1045 "js/lib/gherkin/lexer/lv.js" */
		} /* eof action switch */
	}
	if (_trigger_goto) {
		continue;
	}
}
	}
	if (_goto_level <= _out) {
		break;
	}
	}
	}

/* line 154 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/lv.js.rl" */
};

Lexer.prototype.bytesToString = function(bytes) {
  if(typeof bytes.write == 'function') {
    // Node.js
    return bytes.toString('utf-8');
  } else {
    var result = "";
    for(var b in bytes) {
      result += String.fromCharCode(bytes[b]);
    }
    return result;
  }
};

Lexer.prototype.stringToBytes = function(string) {
  var bytes = [];
  for(var i = 0; i < string.length; i++) {
    bytes[i] = string.charCodeAt(i);
  }
  return bytes;
};

Lexer.prototype.unindent = function(startcol, text) {
  startcol = startcol || 0;
  return text.replace(new RegExp('^[\t ]{0,' + startcol + '}', 'gm'), ''); 
};

Lexer.prototype.store_keyword_content = function(event, data, p, eof) {
  var end_point = (!this.next_keyword_start || (p == eof)) ? p : this.next_keyword_start;
  var content = this.unindent(this.start_col + 2, this.bytesToString(data.slice(this.content_start, end_point))).trimRight();
  var content_lines = content.split("\n")
  var name = content_lines.shift() || "";
  name = name.trim();
  var description = content_lines.join("\n");
  this.listener[event](this.keyword, name, description, this.current_line);
  var nks = this.next_keyword_start;
  this.next_keyword_start = null;
  return nks ? nks - 1 : p;
};

Lexer.prototype.current_line_content = function(data, p) {
  var rest = data.slice(this.last_newline, -1);
  var end = rest.indexOf(10) || -1;
  return this.bytesToString(rest.slice(0, end)).trim();
};

if(typeof exports != 'undefined') {
  exports.Lexer = Lexer;
}
if(typeof window != 'undefined') {
  window.Lexer = Lexer;
}

})();