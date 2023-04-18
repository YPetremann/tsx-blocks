import ts from 'typescript'

export const DEFAULT_COMPILER_OPTIONS: ts.CompilerOptions = {
  experimentalDecorators: true,
  target: ts.ScriptTarget.Latest,
  module: ts.ModuleKind.ESNext,
  declaration: true,
  allowJs: true,
}

//
// We use it to fake the file system when working in a browser environment.
//
export function createCompilerHost(fileName: string, code: string): ts.CompilerHost {
  const sourceFile = ts.createSourceFile(fileName, code, ts.ScriptTarget.Latest, true)
  const files: { [key: string]: ts.SourceFile } = {
    [fileName]: sourceFile,
  }
  return {
    getSourceFile: (name: string): ts.SourceFile | undefined => {
      return files[name]
    },
    writeFile: (name: string, content: string): void => {
      files[name] = ts.createSourceFile(name, content, ts.ScriptTarget.Latest, true)
    },
    getDefaultLibFileName: () => 'lib.d.ts',
    useCaseSensitiveFileNames: () => false,
    getCanonicalFileName: filename => filename,
    getCurrentDirectory: () => '',
    getNewLine: () => '\n',
    getDirectories: () => [],
    fileExists: () => true,
    readFile: () => '',
  }
}

export function parseFromSource(
  source: string,
  compilerOptions?: ts.CompilerOptions
): ModuleNode | null {
  const fileName = 'unknown.ts'
  const compilerHost = createCompilerHost(fileName, source)
  const resolvedCompilerOptions = compilerOptions ?? DEFAULT_COMPILER_OPTIONS
  const program = ts.createProgram([fileName], resolvedCompilerOptions, compilerHost)
  const sourceFile = program.getSourceFile(fileName)
  const diagnostics = program.getSemanticDiagnostics()

  if (diagnostics.length) {
    logError('Error analysing source code:', formatDiagnostics(diagnostics))
    return null
  }

  if (!sourceFile) {
    logWarning('Unable to analyze source code.')
    return null
  }

  const context: AnalyzerContext = {
    checker: program.getTypeChecker(),
    compilerOptions: resolvedCompilerOptions,
    normalizePath: path => path ?? '',
  }

  return new ModuleNode(sourceFile, context)
}
