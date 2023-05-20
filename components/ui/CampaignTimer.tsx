const CampaignTimer = () => {
  return (
    <div>
      <div class="container mx-auto bg-error br-primary text-primary-content">
        <div class="grid grid-rows-2 grid-flow-col gap-4 justify-center content-center">
          <div>
            <p class="normal-case text-xl">
              Time left for a campaign to end wth a link
            </p>
          </div>

          <div class="grid-cols-2">
            <div class="grid grid-flow-col gap-5 text-center auto-cols-max justify-center">
              <div class="flex flex-col ">
                <span class="countdown font-mono text-5xl">
                  <span style="--value:15;"></span>
                </span>
                Hours
              </div>
              <div class="flex flex-col">
                <span class="countdown font-mono text-5xl">
                  <span style="--value:10;"></span>
                </span>
                Minutes
              </div>
              <div class="flex flex-col">
                <span class="countdown font-mono text-5xl">
                  <span style="--value:24;"></span>
                </span>
                Seconds
              </div>
            </div>

            <button className="btn">Button</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignTimer;
