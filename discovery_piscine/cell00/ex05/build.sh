if [ "$#" -eq 0 ]; then
	echo "no arguments supplied"
	exit 1
fi
for a in "$@"; do
	mkdir -p "ex$a"
done
