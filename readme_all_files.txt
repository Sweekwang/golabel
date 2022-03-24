This readme describes the downloaded files from this webpage

all_models.zip
- Zipped folder containing all trained models
- Models have been compressed using gzip to save space, hence need to unzip them
(e.g. use gunzip in LINUZ)
- After unzipping, models are pickled and need to be unpickled to read it, unpickling using
the python joblib library is one method to do it
(e.g see https://scikit-learn.org/stable/modules/model_persistence.html)
- Models have been grouped into the following folders according to their prefixes:
 - agi: models starting with "agi"
 - cid: models starting with "cid"
 - dge: models starting with "dge"
 - dit_gbm: models starting with "dit" and "gbm"
 - go: models starting with "go"
 - hom_sin_tan: models starting with "hom", "sin", "tan"
 - job: models starting with "job", these are continuous features, who have been named as
"job_X", where X is an integer, as these features have non alphanumeric names. Hence they have
been renamed as such, to make parsing on the command line easier. A mapping file to map "job_X"
names to their original feature name is given together with this readme file
 - pid: models starting with "pid"
 - tti: models starting with "tti"

all_scores.zip
- Zipped folder containing all trained models' scores
- Plain text files are stored here, gunzip is not necessary as gzipping is not needed here, file size
is small enough

all_fi.zip
- Zipped folder containing feature importance files for all trained models
- Files have been compressed using gzip to save space, hence need to unzip them
(e.g. use gunzip in LINUZ)
- Files have been grouped into the following folders according to their prefixes:
 - agi: models starting with "agi"
 - cid: models starting with "cid"
 - dge: models starting with "dge"
 - dit_gbm: models starting with "dit" and "gbm"
 - go: models starting with "go"
 - hom_sin_tan: models starting with "hom", "sin", "tan"
 - job: models starting with "job", these are continuous features, who have been named as
"job_X", where X is an integer, as these features have non alphanumeric names. Hence they have
been renamed as such, to make parsing on the command line easier. A mapping file to map "job_X"
names to their original feature name is given together with this readme file
 - pid: models starting with "pid"
 - tti: models starting with "tti"

mod_class_labels_contf.txt
- Mapping file which shows which continuous feature name maps to "job_X" in models' file names

Notes
.gitignore
- git ignore file, present in the above folders, can ignore it
