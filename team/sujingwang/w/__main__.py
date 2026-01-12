
import sys, os
sys.path.extend([__file__, '.'])

from google.appengine.tools import appengine_rpc
from google.appengine.tools import appcfg

appengine_rpc.HttpRpcServer.DEFAULT_COOKIE_FILE_PATH = './.appcfg_cookies'

def main(argv): 
    appcfg.main(argv)

if __name__ == '__main__':
    main(sys.argv)