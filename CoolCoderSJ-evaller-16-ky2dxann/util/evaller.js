const EventEmitter = require("events");
const initClient = require("../crosis/main");

let i = 0;

class Evaller extends EventEmitter {
	
	idleHandles = [];
	state = 0; // idle

	async onIdle() {
		if(!this.client || !this.client.isConnected()) {
			await this.prepare();
		}
		if(this.state == 0) return;

		await new Promise((resolve, reject) => {
			this.idleHandles.push(resolve);
		});
	};

	async prepare(){
		this.client = await initClient();
		this.channel = await this.client.openChannel({
			name: "evaller" + (i++),
			service: "exec"
		});
		global.client = this.client;
	};
	
	async exec(lang, code, timeout){
		const [command, init] = Evaller.getArgs(lang.toLowerCase(), code);
		
		if(!command){
			return 0;
		}
		this.state = 1;
		let timer = null;

		const listener = cmd => {
			if (cmd.output){
				this.emit("out", cmd.output.replace(/\x1b\[[0-9]*m/g,""));
			} else if(cmd.error){
				this.emit("out", cmd.error.replace(/\x1b\[[0-9]*m/g,""));
				this.channel.off("command", listener);
				this.clear();
				timer && clearTimeout(timer);
			} else if(cmd.ok){
				this.emit("ok");
				this.channel.off("command", listener);
				this.clear();
				timer && clearTimeout(timer);
			}
		};
		
		const listener2 = cmd => {
			if (cmd.output){
				this.emit("out", cmd.output.replace(/\x1b\[[0-9]*m/g,""));
			} else if(cmd.error){
				this.emit("out", cmd.error.replace(/\x1b\[[0-9]*m/g,""));
				this.channel.off("command", listener2);	
			} else if(cmd.ok){
				this.channel.off("command", listener2);
			}
		};
		
		if(init){
			this.channel.on("command", listener2);
			await this.channel.request({ exec: { args: init, blocking: false } });
		}

		this.channel.on("command", listener);
		
		if(timeout != Infinity){
			timer = setTimeout(() => {
				this.emit("out", "Killed!");
				this.emit("kill");
				this.clear();
				this.restartChannel();
			}, timeout);
		}

		try { await this.channel.request({ exec: { args: command, blocking: false } }) }
		catch(e) {}

		return 1;
	}
	
	async restartChannel() {
		await this.channel.close();
		await this.client.close();
		await this.prepare();
	}

	clear(){
		this.removeAllListeners("out");
		this.removeAllListeners("kill");
		
		this.state = 0;
		if (this.idleHandles.length > 0) {
			this.idleHandles.shift()();
		}
	}
	
  	static getArgs(lang, code){
		let command, init;
		
		// get the normal name of the language
		for(let lang_official in Evaller.languages){
			for(let test_lang of Evaller.languages[lang_official]){
				if (lang === test_lang) {
					lang = lang_official;
					break;
				}
			}
		}

		switch(lang){
		case "raku":
			command = ["perl6", "-e", code]; 
			break;
		
		case "javascript":
			command = ["node", "-e", code];
			break;
		
		case "ruby":
			command = ["ruby", "-e", code];
			break;
		
		case "swift":
			command = ["sh", "-c", "echo \"" + code.replace(/\\/g, "\\\\\\").replace(/"/g, "\\\"") + "\"> ??w??.swift && swiftc -o ??w?? ??w??.swift && (./??w?? && (rm ./??w?? && rm ./??w??.swift) || (rm ./??w?? && rm ./??w??.swift))"];
			break;
			
		case "fsharp":
			command = ["sh", "-c", "echo \"" + code.replace(/\\/g, "\\\\\\").replace(/"/g, "\\\"") + "\"> ??w??.fs && fsharpc --nologo --out:??w??.exe ??w??.fs && (mono ./??w??.exe && (rm ./??w??.exe && rm ./??w??.fs) || (rm ./??w??.exe && rm ./??w??.fs))"];
			break;
		
		case "rust":
			command = ["sh", "-c", "echo \"" + code.replace(/\\/g, "\\\\\\").replace(/"/g, "\\\"") + "\"> ??w??.rs && rustc -o ??w?? ./??w??.rs && (./??w?? && (rm ./??w?? && rm ./??w??.rs) || (rm ./??w?? && rm ./??w??.rs))"];
			break;

		case "c":
			command = ["sh", "-c", "echo \"" + code.replace(/\\/g, "\\\\\\").replace(/"/g, "\\\"") + "\"> ??w??.c && clang -pthread -lm -o ??w?? ??w??.c && (./??w?? && (rm ./??w?? && rm ./??w??.c) || (rm ./??w?? && rm ./??w??.c))"];
			break;
			
		case "python":
			command = ["sh", "-c", "echo \"" + code.replace(/\\/g, "\\\\\\").replace(/"/g, "\\\"") + "\"> ??w??.py && (python ??w??.py && rm ??w??.py || rm ??w??.py)"];
			break;
		
		case "java":
			command = ["sh", "-c", "echo \"" + code.replace(/\\/g, "\\\\\\").replace(/"/g, "\\\"") + "\"> ??w??.java && javac -classpath .:/run_dir/junit-4.12.jar -d . ??w??.java && (java -classpath .:run_dir/junit-4.12.jar Main && (rm ./Main.class && rm ??w??.java) || (rm ./Main.class && rm ??w??.java))"];
			break;
			
		case "cpp":
			command = ["sh", "-c", "echo \"" + code.replace(/\\/g, "\\\\\\").replace(/"/g, "\\\"") + "\"> ??w??.cpp && clang++-7 -pthread -o ??w?? ??w??.cpp && (./??w?? && (rm ??w?? && rm ??w??.cpp) || (rm ??w?? && rm ??w??.cpp))"];
			break;
		
		case "csharp":
			command = ["sh", "-c", "echo \"" + code.replace(/\\/g, "\\\\\\").replace(/"/g, "\\\"") + "\"> ??w??.cs && mcs -out:??w??.exe ??w??.cs && (mono ??w??.exe && (rm ./??w??.exe && rm ./??w??.cs) || (rm ./??w??.exe && rm ./??w??.cs))"];
			break;
			
		case "sh":
			command = ["sh", "-c", code];
			break;
			
		case "bash":
			command = ["bash", "-c", code];
			break;
		
		case "obrya":
			init = ["sh", "-c", "( ( test -f obrya.exe && test -d lib && test -f lib/math.oba ) || ( ( test -f Obratnaya.zip || wget https://repl.it/@obratnaya/Obratnaya.zip ) && unzip -o Obratnaya.zip \"obrya.exe\" \"lib/*\" ) ) > /dev/null 2>&1 && "];
			command = ["sh", "-c", "echo \"" + code.replace(/\\/g, "\\\\\\").replace(/"/g, "\\\"") + "\" > ??w??.oba && ( (mono obrya.exe ??w??.oba && rm ./??w??.oba) || rm ./??w??.oba )"];
			break;

		case "marvin":
			command = ["sh", "-c", "((cd marvin || (mkdir marvin && cd marvin)) && pwd && (test -f MARVIN-1.zip || wget https://repl.it/@generationXcode/MARVIN-1.zip) && unzip -o MARVIN-1.zip && python -m pip install ply && python -m pip install matplotlib && python -m pip install seaborn )  && echo \"" + code.replace(/\\/g, "\\\\\\").replace(/"/g, "\\\"") + "\" > main.vin && python main.py"];
			break;

		case "volant":
			init = ["sh", "-c", "(test -f ./a.out && rm ./a.out || $NULL ) && ( test -f ./volant/bin/volant || ( echo \"Installing Volant...\" && git clone https://github.com/volantlang/volant > /dev/null 2>&1 && export GOPATH=$PWD/volant && cd volant && go build -o ./bin/volant ./src && cd ../ && echo \"Done!\" ) ) && ( ( test -f /home/runner/.apt/usr/include/uv.h && test -f /home/runner/.apt/usr/include/Block.h && test -f /home/runner/.apt/usr/include/gc.h ) || ( echo \"Installing dependencies...\" && install-pkg libblocksruntime-dev libuv-dev libgc-dev > /dev/null 2>&1 && echo \"Done!\" ) )"];
			command = ["sh", "-c", "echo \"" + code.replace(/\\/g, "\\\\\\").replace(/"/g, "\\\"") + "\"> ??w??.vo && ./volant/bin/volant compile ??w??.vo -clang -I/home/runner/.apt/usr/include && test -f ./a.out && rm ./??w??.vo && ( ( ./a.out && rm ./a.out ) || rm ./a.out )"];
			break;

		case "cookeylang":
			command = ["sh", "-c", "echo \"" + code.replace(/\\/g, "\\\\\\").replace(/"/g, "\\\"") + "\"> ??w??.clf && ((npx cookeylang ??w??.clf && rm ??w??.clf) || rm ??w??.clf)"]
			break;
			
		default:
			return [null, null];
		}
		
		return [command, init];
  	}
}

Evaller.languages = {
	'javascript': ['js','nodejs'],
	'python': ['py'],
	'cpp': ['c++'],
	'csharp': ['c#'],
	'fsharp': ['f#'],
	'raku': ['perl6'],
	'obrya': ['oba'],
	'volant': ['vo'],
	'cookeylang': ['clf'],
	'rust': ['rs']
};

module.exports = Evaller;