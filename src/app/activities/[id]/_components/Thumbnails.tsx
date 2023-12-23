type Props = React.InputHTMLAttributes<HTMLDivElement> & {
  thumbnails: string[];
}

const Thumbnails = ({ thumbnails }: Props) => (
  <>{
    thumbnails.length > 0 && (
      <div className="w-full h-[400px] my-16 flex justify-start items-start gap-5">
        <div className="flex-grow h-full bg-image-cover rounded-lg"
             style={ { backgroundImage: `url("${ thumbnails[0] }")` } }/>
        {
          thumbnails.length > 3 && (
            <div className="flex-grow h-full flex flex-col items-stretch gap-4">
              <div className="flex-grow w-full flex flex-row items-stretch gap-4">
                { thumbnails.slice(1, 3).map((src, i) => (
                  <div className="w-full h-full bg-image-cover rounded-lg" key={ i }
                       style={ { backgroundImage: `url("${ src }")` } }/>
                )) }
              </div>
              <div className="flex-grow w-full flex flex-row items-stretch gap-4">
                { thumbnails.slice(3, 5).map((src, i) => (
                  <div className="w-full h-full bg-image-cover rounded-lg" key={ i }
                       style={ { backgroundImage: `url("${ src }")` } }/>
                )) }
              </div>
            </div>
          ) || thumbnails.length > 1 && (
            <div className="flex-grow h-full flex flex-col items-stretch gap-4">
              { thumbnails.slice(1, 3).map((src, i) => (
                <div className="w-full h-full bg-image-cover rounded-lg" key={ i }
                     style={ { backgroundImage: `url("${ src }")` } }/>
              )) }
            </div>
          )
        }
      </div>
    ) || <div className="pt-16"/>
  }</>
);

export default Thumbnails;
