build-path := "./build"

run:
  npm run docs:dev

[unix]
mkdir-build:
  mkdir -p {{build-path}}

build-test-plan: mkdir-build
  pandoc docs/software-docs/test/test-plan.md \
    --pdf-engine xelatex \
    --number-sections \
    -o {{build-path}}/test-plan.pdf

view-test-plan:
  zathura {{build-path}}/test-plan.pdf

dev-test-plan: build-test-plan view-test-plan
